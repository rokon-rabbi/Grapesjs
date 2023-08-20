const editor = grapesjs.init({
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: "#gjs",
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,

  fromElement: true,
  // Size of the editor
  height: "100vh",
  width: "auto",
  // Disable the storage manager for the moment
  storageManager: false,
  // Avoid any default panel

  panels: {
    defaults: [
      {
        id: "layers",
        el: ".panel__right",
        // Make the panel resizable
        resizable: {
          maxDim: 350,
          minDim: 200,
          tc: 0, // Top handler
          cl: 1, // Left handler
          cr: 0, // Right handler
          bc: 0, // Bottom handler
          // Being a flex child we need to change `flex-basis` property
          // instead of the `width` (default)
          keyWidth: "flex-basis",
        },
      },
    ],
  },

  selectorManager: {
    appendTo: ".styles-container",
  },
  // traitManager
  traitManager: {
    appendTo: ".traits-container",
  },
  // styleManager
  styleManager: {
    appendTo: ".styles-container",
    sectors: [
      {
        name: "Dimension",
        open: false,
        // Use built-in properties
        buildProps: ["width", "min-height", "padding"],
        // Use `properties` to define/override single property
        properties: [
          {
            // Type of the input,
            // options: integer | radio | select | color | slider | file | composite | stack
            type: "integer",
            name: "The width", // Label for the property
            property: "width", // CSS property (if buildProps contains it will be extended)
            units: ["px", "%"], // Units, available only for 'integer' types
            defaults: "auto", // Default value
            min: 0, // Min value, available only for 'integer' types
          },
        ],
      },
      {
        name: "Extra",
        open: false,
        buildProps: ["background-color", "box-shadow", "custom-prop"],
        properties: [
          {
            id: "custom-prop",
            name: "Custom Label",
            property: "font-size",
            type: "select",
            defaults: "32px",
            // List of options, available only for 'select' and 'radio'  types
            options: [
              { value: "12px", name: "Tiny" },
              { value: "18px", name: "Medium" },
              { value: "32px", name: "Big" },
            ],
          },
        ],
      },
    ],
  },
  //  blockManager
  blockManager: {
    appendTo: ".blocks-container",
    className:".block",
    blocks: [
      {
        id: "section", // id is mandatory
        label: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z"></path>
    </svg>`, // You can use HTML/SVG inside labels
        attributes: { class: "gjs-block-section" },
        content: `<section>
    <h1>This is a simple title</h1>
    <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
  </section>`,
      },
      {
        id: "text",
        label: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z"></path>
      </svg>`,
        content: '<div data-gjs-type="text">Insert your text here</div>',
      },
      {
        id: "image",
        label: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z"></path>
      </svg>`,
        // Select the component once it's dropped
        select: true,
        // You can pass components as a JSON instead of a simple HTML string,
        // in this case we also use a defined component type `image`
        content: { type: "image" },
        // This triggers `active` event on dropped components and the `image`
        // reacts by opening the AssetManager
        activate: true,
      },
    ],
  },
  // layer manager
  layerManager: {
    appendTo: ".layers-container",
  },
  // device manager
  deviceManager: {
    devices: [
      {
        name: "Desktop",
        width: "",
        widthMedia: "1024",
      },
      {
        name: "Mobile",
        width: "320",
        widthMedia: "", // this value will be used in CSS @media
      },
    ],
  },
  // storage manager
  storageManager: {
    type: "local", // Type of the storage, available: 'local' | 'remote'
    autosave: true, // Store data automatically
    autoload: true, // Autoload stored data on init
    stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
    options: {
      local: {
        // Options for the `local` type
        key: "gjsProject", // The key for the local storage
      },
    },
  },
  commands: {
    defaults: [
      // ...
      {
        id: "store-data",
        run(editor) {
          editor.store();
        },
      },
    ],
  },
});
// three column custom blocks
editor.BlockManager.add("3-Columns", {
  label: `<svg viewBox="0 0 23 24">
  <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"></path>
</svg>`,
  content: `<style>
            .gjs-row{
                display:flex;
                justify-content:flex-start;
                align-items:stretch;
                flex-wrap:nowrap;
                padding:10px;
              }
              .gjs-cell{
                min-height:75px;
                flex-grow:1;
                flex-basis:100%;
              }
              @media (max-width: 768px){
                .gjs-row{
                  flex-wrap:wrap;
                }
              }
            </style>
        <div data-gjs-type="default"  class="gjs-row">
          <div data-gjs-type="default" class="gjs-cell">
          </div>
          <div data-gjs-type="default" class="gjs-cell">
           </div>
         <div data-gjs-type="default" class="gjs-cell">
          </div>
         </div>
            `,
  attributes: {
    title: "A block",
  },
});
// pannel top
editor.Panels.addPanel({
  id: "panel-top",
  el: ".panel__top",
});
// pannel switchr
editor.Panels.addPanel({
  id: "panel-switcher",
  el: ".panel__switcher",
  buttons: [
    {
      id: "show-layers",
      active: true,
      label: `<svg style="display: block; max-width:22px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z"></path>
  </svg>`,
      command: "show-layers",
      // Once activated disable the possibility to turn it off
      togglable: false,
    },

    {
      id: "show-style",
      active: true,
      label: `<svg style="display: block; max-width:22px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z"></path>
  </svg>`,
      command: "show-styles",
      togglable: false,
    },
    // {
    //   id: "show-traits",
    //   active: true,
    //   label: "Traits",
    //   command: "show-traits",
    //   togglable: false,
    // },
    {
      id: "show-blocks",
      active: true,
      label: `<svg style="display: block; max-width:22px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"></path>
  </svg>`,
      command: "show-blocks",
      togglable: false,
    },
  ],
});
// basic actions
editor.Panels.addPanel({
  id: "basic-actions",
  el: ".panel__basic-actions",
  buttons: [
    {
      id: "visibility",
      active: true, // active by default
      className: "btn-toggle-borders",
      label: `<svg style="display: block; max-width:22px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M15,5H17V3H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M7,21H9V19H7M7,5H9V3H7V5Z"></path>
  </svg>`,
      command: "sw-visibility", // Built-in command
    },
    {
      id: "export",
      title: "export",
      className: "btn-open-export",
      label: `<svg style="display: block; max-width:22px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z"></path>
  </svg>`,
      command: "export-template",
      context: "export-template", // For grouping context of buttons from the same panel
    },
    {
      id: "show-json",
      className: "btn-show-json",
      label: "JSON",
      context: "show-json",

      command(editor) {
        editor.Modal.setTitle("Components JSON")
          .setContent(
            `<textarea style="width:100%; height: 250px;">
      ${JSON.stringify(editor.getComponents())}
      
    </textarea>`
          )
          .open();
        console.log(JSON.stringify(editor.getComponents()));
      },
    },
    // pannel button for download json
    {
      id: "download-json",
      className: "btn-show-json",
      label: `<svg style="display: block; max-width:22px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"></path>
  </svg>`,
      context: "download-json",

      command(editor) {
        const jsonContent = JSON.stringify(editor.getComponents(), null, 2);

        // Function to download the JSON content as a TXT file
        function downloadJSONAsTXT(content, fileName) {
          const blob = new Blob([content], { type: "text/plain" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = fileName || "data.txt";
          a.textContent = "Download JSON";
          a.click();
          URL.revokeObjectURL(url);
        }

        // Download the JSON content
        downloadJSONAsTXT(jsonContent, "components.json");
      },
    },
    {
      id: "preview",
      className: "",
      label: `<svg style="display: block; max-width:22px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>`,
      command: "preview",
    },
    // html css
    {
      id: "downloadHtml",
      title: "HtmlCss",
      className: "btn-open-export",
      label: "html",
      command: "htmlCss",
      // For grouping context of buttons from the same panel
    },
  ],
});

// device pannel
editor.Panels.addPanel({
  id: "panel-devices",
  el: ".panel__devices",
  buttons: [
    {
      id: "device-desktop",
      label: `<svg style="display: block; max-width:22px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"></path>
  </svg>`,
      command: "set-device-desktop",
      active: true,
      togglable: false,
    },
    {
      id: "device-mobile",
      label: `<svg style="display: block; max-width:22px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"></path>
  </svg>`,
      command: "set-device-mobile",
      togglable: false,
    },
  ],
});
// commands
// export code
editor.on("run:export-template:before", opts => {
  console.log("Before the command run");
  if (0 /* some condition */) {
    opts.abort = 1;
  }
});
editor.on("run:export-template", () => console.log("After the command run"));
editor.on("abort:export-template", () => console.log("Command aborted"));

editor.Commands.add("show-layers", {
  getRowEl(editor) {
    return editor.getContainer().closest(".editor-row");
  },
  getLayersEl(row) {
    return row.querySelector(".layers-container");
  },

  run(editor, sender) {
    const lmEl = this.getLayersEl(this.getRowEl(editor));
    lmEl.style.display = "";
  },
  stop(editor, sender) {
    const lmEl = this.getLayersEl(this.getRowEl(editor));
    lmEl.style.display = "none";
  },
});
editor.Commands.add("show-styles", {
  getRowEl(editor) {
    return editor.getContainer().closest(".editor-row");
  },
  getStyleEl(row) {
    return row.querySelector(".styles-container");
  },

  run(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = "";
  },
  stop(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = "none";
  },
});
// traits
editor.Commands.add("show-traits", {
  getTraitsEl(editor) {
    const row = editor.getContainer().closest(".editor-row");
    return row.querySelector(".traits-container");
  },
  run(editor, sender) {
    this.getTraitsEl(editor).style.display = "";
  },
  stop(editor, sender) {
    this.getTraitsEl(editor).style.display = "none";
  },
});
// blocks
editor.Commands.add("show-blocks", {
  getTraitsEl(editor) {
    const row = editor.getContainer().closest(".editor-row");
    return row.querySelector(".blocks-container");
  },
  run(editor, sender) {
    this.getTraitsEl(editor).style.display = "";
  },
  stop(editor, sender) {
    this.getTraitsEl(editor).style.display = "none";
  },
});
// commands for device manager
editor.Commands.add("set-device-desktop", {
  run: editor => editor.setDevice("Desktop"),
});
editor.Commands.add("set-device-mobile", {
  run: editor => editor.setDevice("Mobile"),
});
editor.Commands.add("htmlCss", {
  run: editor => {
    const editorHtml = editor.getHtml();
    const editorCss = editor.getCss();
    const combinedHtmlCss = `<style>${editorCss}</style>${editorHtml}`;

    // Log both HTML and CSS together
    console.log(combinedHtmlCss);
    let localHTML = localStorage.setItem('grapeJsHTML');
    // Create a new window or tab
    const newWindow = window.open("", "_blank");

    // Write the HTML and CSS content to the new window
    if (newWindow) {
      newWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          ${editorCss}
        </style>
      </head>
      <body>
        ${editorHtml}
      </body>
      </html>
    `);
    } else {
      console.error("Popup blocked. Make sure to allow popups on this site.");
    }
  },
});
// let htmlWithcss = editor.Commands.run("gjs-get-inlined-html");
// console.log(htmlWithcss);
