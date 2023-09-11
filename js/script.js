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
  storageManager: true,
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

  // styleManager
  styleManager: {
    appendTo: ".styles-container",
    custom: true,
    sectors: [
      {
        name: "General",
        properties: [
          {
            extend: "float",
            type: "radio",
            default: "none",
            options: [
              { value: "none", className: "fa fa-times" },
              { value: "left", className: "fa fa-align-left" },
              { value: "right", className: "fa fa-align-right" },     
            ],
          },
          "display",
          { extend: "position", type: "select" },
          "top",
          "right",
          "left",
          "bottom",
        ],
      },
      {
        name: "Dimension",
        open: false,
        properties: [
          "width",
          {
            id: "flex-width",
            type: "integer",
            name: "Width",
            units: ["px", "%"],
            property: "flex-basis",
            toRequire: 1,
          },
          "height",
          "max-width",
          "min-height",
          "margin",
          "padding",
        ],
      },
      {
        name: "Typography",
        open: false,
        properties: [
          "font-family",
          "font-size",
          "font-weight",
          "letter-spacing",
          "color",
          "line-height",
          {
            extend: "text-align",
            options: [
              { id: "left", label: "Left", className: "fa fa-align-left" },
              {
                id: "center",
                label: "Center",
                className: "fa fa-align-center",
              },
              { id: "right", label: "Right", className: "fa fa-align-right" },
              {
                id: "justify",
                label: "Justify",
                className: "fa fa-align-justify",
              },
            ],
          },
          {
            property: "text-decoration",
            type: "radio",
            default: "none",
            options: [
              { id: "none", label: "None", className: "fa fa-times" },
              {
                id: "underline",
                label: "underline",
                className: "fa fa-underline",
              },
              {
                id: "line-through",
                label: "Line-through",
                className: "fa fa-strikethrough",
              },
            ],
          },
          "text-shadow",
        ],
      },
      {
        name: "Decorations",
        open: false,
        buildProps: ["background-color", "box-shadow", "custom-prop"],
        properties: [
          "opacity",
          "border-radius",
          "border",
          "box-shadow",
          "background", // { id: 'background-bg', property: 'background', type: 'bg' }
        ],
      },
      {
        name: "Extra",
        open: false,
        buildProps: ["transition", "perspective", "transform"],
      },
      {
        name: "Flex",
        open: false,
        properties: [
          {
            name: "Flex Container",
            property: "display",
            type: "select",
            defaults: "block",
            list: [
              { value: "block", name: "Disable" },
              { value: "flex", name: "Enable" },
            ],
          },
          {
            name: "Flex Parent",
            property: "label-parent-flex",
            type: "integer",
          },
          {
            name: "Direction",
            property: "flex-direction",
            type: "radio",
            defaults: "row",
            list: [
              {
                value: "row",
                name: "Row",
                className: "icons-flex icon-dir-row",
                title: "Row",
              },
              {
                value: "row-reverse",
                name: "Row reverse",
                className: "icons-flex icon-dir-row-rev",
                title: "Row reverse",
              },
              {
                value: "column",
                name: "Column",
                title: "Column",
                className: "icons-flex icon-dir-col",
              },
              {
                value: "column-reverse",
                name: "Column reverse",
                title: "Column reverse",
                className: "icons-flex icon-dir-col-rev",
              },
            ],
          },
          {
            name: "Justify",
            property: "justify-content",
            type: "radio",
            defaults: "flex-start",
            list: [
              {
                value: "flex-start",
                className: "icons-flex icon-just-start",
                title: "Start",
              },
              {
                value: "flex-end",
                title: "End",
                className: "icons-flex icon-just-end",
              },
              {
                value: "space-between",
                title: "Space between",
                className: "icons-flex icon-just-sp-bet",
              },
              {
                value: "space-around",
                title: "Space around",
                className: "icons-flex icon-just-sp-ar",
              },
              {
                value: "center",
                title: "Center",
                className: "icons-flex icon-just-sp-cent",
              },
            ],
          },
          {
            name: "Align",
            property: "align-items",
            type: "radio",
            defaults: "center",
            list: [
              {
                value: "flex-start",
                title: "Start",
                className: "icons-flex icon-al-start",
              },
              {
                value: "flex-end",
                title: "End",
                className: "icons-flex icon-al-end",
              },
              {
                value: "stretch",
                title: "Stretch",
                className: "icons-flex icon-al-str",
              },
              {
                value: "center",
                title: "Center",
                className: "icons-flex icon-al-center",
              },
            ],
          },
          {
            name: "Flex Children",
            property: "label-parent-flex",
            type: "integer",
          },
          {
            name: "Order",
            property: "order",
            type: "integer",
            defaults: 0,
            min: 0,
          },
          {
            name: "Flex",
            property: "flex",
            type: "composite",
            properties: [
              {
                name: "Grow",
                property: "flex-grow",
                type: "integer",
                defaults: 0,
                min: 0,
              },
              {
                name: "Shrink",
                property: "flex-shrink",
                type: "integer",
                defaults: 0,
                min: 0,
              },
              {
                name: "Basis",
                property: "flex-basis",
                type: "integer",
                units: ["px", "%", ""],
                unit: "",
                defaults: "auto",
              },
            ],
          },
          {
            name: "Align",
            property: "align-self",
            type: "radio",
            defaults: "auto",
            list: [
              {
                value: "auto",
                name: "Auto",
              },
              {
                value: "flex-start",
                title: "Start",
                className: "icons-flex icon-al-start",
              },
              {
                value: "flex-end",
                title: "End",
                className: "icons-flex icon-al-end",
              },
              {
                value: "stretch",
                title: "Stretch",
                className: "icons-flex icon-al-str",
              },
              {
                value: "center",
                title: "Center",
                className: "icons-flex icon-al-center",
              },
            ],
          },
        ],
      },
    ],
  },
  traitManager: {
    appendTo: ".traits-container",
  },
  jsManager: {
    appendTo: ".js-container",
  },
  //  blockManager
  blockManager: {
    appendTo: "#blocks",
    className: ".block",

    blocks: [],
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
        widthMedia: "",
      },
      {
        name: "Mobile",
        width: "320",
        widthMedia: "", // this value will be used in CSS @media
      },
      {
        name: "Mobile(landscape)",
        width: "780",
        height:"320",
        widthMedia: "", // this value will be used in CSS @media
      },
      
      {
        name: "A4",
        width: "210mm", // Adjust the width as needed
        height: "297mm", // This width will be applied on the canvas frame
        widthMedia: "", // This width that will be used for the CSS media
      },
      {
        name: "A5",
        width: "148mm", // Adjust the width as needed
        height: "210mm", // This width will be applied on the canvas frame
        widthMedia: "", // This width that will be used for the CSS media
      },
      {
        name: "A5(landscape)",
        width: "210mm", // Adjust the width as needed
        height: "148mm", // This width will be applied on the canvas frame
        widthMedia: "", // This width that will be used for the CSS media
      },
      {
        name: "legal",
        width: "215.9mm", // Adjust the width as needed
        height: "355.6mm", // This width will be applied on the canvas frame
        widthMedia: "", // This width that will be used for the CSS media
      },
    ],
  },
  // storage manager
  storageManager: {
    type: "local", // Type of the storage, available: 'local' | 'remote'
    autosave: false, // Store data automatically
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
  canvas: {
    styles: ["../styles/style.css"],
    scripts: [],
  },
});

// content dragable functionality
// editor.getModel().set('dmode', 'absolute');
// image
editor.BlockManager.add("image", {
  id: "image",
  category: "basics",
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

  attributes: {
    title: "image",
  },
});
// text
editor.BlockManager.add("text", {
  id: "text",
  category: "basics",
  label: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z"></path>
      </svg>`,
  content: '<div data-gjs-type="text">Insert your text here</div>',

  attributes: {
    title: "text",
  },
});
// section blocks
editor.BlockManager.add("section", {
  id: "section", // id is mandatory
  category: "basics",
  label: `<svg viewBox="0 0 24 24">
  <path fill="currentColor" d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z"></path>
</svg>`, // You can use HTML/SVG inside labels
  attributes: { class: "gjs-block-section" },
  content: `<section>
<h1>This is a simple title</h1>
<div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
</section>`,

  attributes: {
    title: "section",
  },
});

// three column custom blocks
editor.BlockManager.add("3-Columns", {
  label: `<svg viewBox="0 0 23 24">
  <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"></path>
</svg>`,
  category: "basics",
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
// bootstrap components
editor.BlockManager.add("bootstrap-card", {
  label: "card",
  category: "advanced",
  content: ` <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            `,
  attributes: {
    title: "card",
  },
});

// form blocks
editor.BlockManager.add("Forms", {
  label: "form",
  category: "forms",
  content: ` <form action="index.html" method="post" >
        <input type="hidden" name="hidden-input" value="someval">
        <div class="row">
          <label>Name</label>
          <input type="text" name="text-input" value="">
        </div>
        <div class="row">
          <label>Messagge</label>
          <textarea name="textarea-input"></textarea>
        </div>
        <div class="row">
          <label>Options</label>
          <select name="select-input">
            <option value="">- Select -</option>
            <option value="1">Value 1</option>
            <option value="2">Value 2</option>
            <option value="3">Value 3</option>
          </select>
        </div>
        <div class="row">
          <input type="checkbox" name="checkbox-input" value="1"> Test
        </div>
        <div class="row">
          <input type="radio" name="radio-input" value="1"> 1
          <input type="radio" name="radio-input" value="2"> 2
          <input type="radio" name="radio-input" value="3"> 3
        </div>
        <button type="button" name="button-name">Send</button>
      </form>
      <style>
      </style>
            `,
  attributes: {
    title: "form",
  },
});

// for input block
editor.BlockManager.add("input", {
  label: "input",
  category: "forms",
  content: `     
          <input type="text" name="text-input" value="">
    
            `,
  attributes: {
    title: "input",
  },
});
// text aria block
editor.BlockManager.add("text-area", {
  label: "text area",
  category: "forms",
  content: ` 
          <textarea name="textarea-input"></textarea>
            `,
  attributes: {
    title: "text area",
  },
});
//  select block
editor.BlockManager.add("select", {
  label: "select",
  category: "forms",
  content: `
          <label>Options</label>
          <select name="select-input">
            <option value="">- Select -</option>
            <option value="1">Value 1</option>
            <option value="2">Value 2</option>
            <option value="3">Value 3</option>
          </select>
     
            `,
  attributes: {
    title: "select",
  },
});
// check box block
editor.BlockManager.add("check-box", {
  label: "check-box",
  category: "forms",
  content: ` 
        <div class="row">
          <input type="checkbox" name="checkbox-input" value="1"> Test
        </div>
            `,
  attributes: {
    title: "checkbox",
  },
});
// check box block
editor.BlockManager.add("radio-box", {
  label: "radio-box",
  category: "forms",
  content: ` 
        <div class="row">
          <input type="radio" name="radio-input" value="1"> 1
          <input type="radio" name="radio-input" value="2"> 2
          <input type="radio" name="radio-input" value="3"> 3
        </div>
            `,
  attributes: {
    title: "radio-box",
  },
});
// js blocks
editor.BlockManager.add("js-block", {
  label: "js",
  category: "js",
  content: ` <p>This is Javascript Magic</p>
            `,
  attributes: {
    title: "js",
  },
});

// link block
// Define the 'content-link' block
editor.BlockManager.add("content-link", {
  label: "Content Link",
  category: "Contents",
  attributes: "link",
  content: {
    type: "content-link",
  },
});

// Define the 'content-link' component
editor.DomComponents.addType("content-link", {
  extend: "link",
  model: {
    defaults: {
      editable: true,
      droppable: true,
      style: {
        display: "inline-block",
        padding: "5px",
      },
      attributes: { href: "http://google.com" },
      content: "click me",
    },
  },

  // view: {
  //   events: {
  //     click: function (event, model) {
  //       window.open(this.model.get("attributes").href, "_blank");
  //     },
  //   },
  // },
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>-
function openCustomDeviceManager() {
  const modalContent = `
    <div>
      <label for="customWidth">Width:</label>
      <input type="number" id="customWidth" placeholder="Enter width">
      <label for="customHeight">Height:</label>
      <input type="number" id="customHeight" placeholder="Enter height">

    </div>
  `;

  const modalOptions = {
    title: "Custom Device",
    content: modalContent,
    closeBtn: "Close",
    buttons: [
      {
        text: "Apply",
        action: function () {
          // Handle the user input here

          const customWidth = document.getElementById("customWidth").value;
          const customHeight = document.getElementById("customHeight").value;
          const device1 = deviceManager.add({
            // Without an explicit ID, the `name` will be taken. In case of missing `name`, a random ID will be created.

            name: "custom",
            width: `${customWidth}px`, // This width will be applied on the canvas frame and for the CSS media
            height: `${customHeight}px`, // This width will be applied on the canvas frame and for the CSS media
          });
          // Set the canvas size with the specified width and height
          editor.setDevice("custom");

          // Close the modal
          modal.close();
        },
      },
    ],
  };

  const modal = editor.Modal;
  modal.open(modalOptions);
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// link

// for input fields traits
editor.DomComponents.addType("input", {
  isComponent: el => el.tagName == "INPUT",
  model: {
    defaults: {
      traits: [
        // Strings are automatically converted to text types
        "name", // Same as: { type: 'text', name: 'name' }
        "placeholder",
        {
          type: "select", // Type of the trait
          label: "Type", // The label you will see in Settings
          name: "type", // The name of the attribute/property to use on the component
          options: [
            { id: "text", name: "Text" },
            { id: "email", name: "Email" },
            { id: "password", name: "Password" },
            { id: "number", name: "Number" },
          ],
        },
        {
          type: "checkbox",
          name: "required",
        },
        {
          type: "input",
          name: "required",
        },
        {
          type: "checkbox", // Add a checkbox trait for read-only
          name: "readonly", // Attribute/property name to use on the component
          label: "Read-only", // Label for the checkbox trait
        },
      ],

      // As by default, traits are bound to attributes, so to define
      // their initial value we can use attributes
      attributes: { type: "text", required: true, readonly: false }, // Set readonly to false by default
    },
  },
});
// editor.DomComponents.addType("custom-input", {
//   model: {
//     defaults: {
//       traits: [
//         {
//           type: "text",
//           label: "Attribute Name",
//           name: "data-attribute-name",
//         },
//         {
//           type: "text",
//           label: "Attribute Value",
//           name: "data-attribute-value",
//         },
//       ],
//       attributes: {
//         "data-attribute-name": "custom-attr", // Default attribute name
//         "data-attribute-value": "custom-value", // Default attribute value
//       },
//     },
//   },
//   view: {
//     init() {
//       this.listenTo(this.model, "change:data-attribute-name change:data-attribute-value", this.handleAttributeChange);
//       this.handleAttributeChange();
//     },
//     handleAttributeChange() {
//       const attributeName = this.model.get("data-attribute-name");
//       const attributeValue = this.model.get("data-attribute-value");

//       // Set the custom attribute and its value on the component's element
//       this.el.setAttribute(attributeName, attributeValue);
//     },
//   },
// });

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
    {
      id: "show-traits",
      active: true,
      label: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"></path></svg>`,
      command: "show-traits",
      togglable: false,
    },
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
      label: "HTML",
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
    {
      id: "device-mobile(landscape)",
      label: `<svg style="display: block; max-width:22px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z"></path>
  </svg>`,
      command: "set-device-mobile-landscape",
      togglable: false,
    },
  ],
});
// custom select pannel
editor.Panels.addPanel({
  id: "custom-panel", // Unique ID for your custom panel
  el: ".custom-panel-container", // Selector for the panel's container
  content: `
  <label for="cdnSelect">Bootstrap:</label>
  <select id="cdnSelect">
    <option value="none">select</option>
    <option value="bootstrap">Bootstrap</option>
  </select>

  `,
});
// custom device pannel
editor.Panels.addPanel({
  id: "panel", // Unique ID for your custom panel
  el: ".custom-device-container", // Selector for the panel's container
  content: `
  <label for="deviceSelect">Page Size</label>
  <select id="deviceSelect">
    <option value="A4">select</option>
    <option value="A4">A4</option>
    <option value="A5">A5</option>
    <option value="A5(landscape)">A5(landscape)</option>
    <option value="legal">legal</option>
    <option value="custom">custom</option>
  </select>
 
  `,
});
const selectCanvas = document.getElementById("deviceSelect");
selectCanvas.addEventListener("change", event => {
  const selectedCanvas = selectCanvas.options[selectCanvas.selectedIndex];
  if (selectedCanvas.value === "A4") {
    editor.setDevice("A4");
  } else if (selectedCanvas.value === "A5") {
    editor.setDevice("A5");
  }
  else if (selectedCanvas.value === "A5(landscape)") {
    editor.setDevice("A5(landscape)");
  }  else if (selectedCanvas.value === "legal") {
    editor.setDevice("legal");
  } else if (selectedCanvas.value === "custom") {
    openCustomDeviceManager();
  }
});
// custon select btn command

function removeCanvasResources() {
  // Remove the Bootstrap styles from the canvas
  editor.Canvas.getDocument()
    .querySelectorAll(
      'link[href*="bootstrap@5.0.2/dist/css/bootstrap.min.css"]'
    )
    .forEach(styleLink => {
      styleLink.remove();
    });

  // Remove the Bootstrap scripts from the canvas
  editor.Canvas.getDocument()
    .querySelectorAll(
      'script[src*="bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"]'
    )
    .forEach(scriptTag => {
      scriptTag.remove();
    });
}

// Function to add the canvas styles and scripts
function addCanvasResources() {
  // Add the Bootstrap styles to the canvas
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
  editor.Canvas.getDocument().head.appendChild(styleLink);

  // Add the Bootstrap scripts to the canvas
  const scriptTag = document.createElement("script");
  scriptTag.src =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
  editor.Canvas.getDocument().body.appendChild(scriptTag);

  // Load the canvas
  editor.load(editor.getConfig().canvas);
}

// Listen for changes in the select element
const selectElement = document.getElementById("cdnSelect");
selectElement.addEventListener("change", event => {
  event.preventDefault();
  const selectedOption = selectElement.options[selectElement.selectedIndex];

  if (selectedOption.value === "none") {
    removeCanvasResources(); // Remove the canvas resources
  } else if (selectedOption.value === "bootstrap") {
    addCanvasResources(); // Add the canvas resources
  }
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
// layers command
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
// styles command
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

// commans for trait container
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
    return row.querySelector("#blocks");
  },
  run(editor, sender) {
    this.getTraitsEl(editor).style.display = "";
  },
  stop(editor, sender) {
    this.getTraitsEl(editor).style.display = "none";
  },
});

// commands for device manager
// desktop
editor.Commands.add("set-device-desktop", {
  run: editor => editor.setDevice("Desktop"),
});
// mobile
editor.Commands.add("set-device-mobile", {
  run: editor => editor.setDevice("Mobile"),
});
editor.Commands.add("set-device-mobile-landscape", {
  run: editor => editor.setDevice("Mobile(landscape)"),
});

// html css import command
editor.Commands.add("htmlCss", {
  run: editor => {
    window.open("./webpage.html", "_blank");
  },
});
editor.on("update", function () {
  let editorHtml = editor.getHtml();
  let editorCss = editor.getCss();
  localStorage.setItem("Html", editorHtml);
  localStorage.setItem("Css", editorCss);
});
// Function to load Bootstrap CDN
// Define a custom command handler for canvas size selection
