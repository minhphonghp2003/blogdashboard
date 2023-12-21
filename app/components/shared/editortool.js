import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Marker from "@editorjs/marker";
import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
import Warning from "@editorjs/warning";
import editorjsCodeflask from "@calumk/editorjs-codeflask";
import InlineImage from "editorjs-inline-image";
import InlineCode from "@editorjs/inline-code";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import Strikethrough from "@sotaproject/strikethrough";
import ChangeCase from "editorjs-change-case";
import NestedList from "@editorjs/nested-list";
import createGenericInlineTool, {
    ItalicInlineTool,
    UnderlineInlineTool,
} from "editorjs-inline-tool";
const ColorPlugin = require("editorjs-text-color-plugin");
const Superscript = require("editorjs2-superscript");
const Hyperlink = require("editorjs-hyperlink");
const Subscript = require("editorjs2-subscript");
const Table = require("editorjs-table");

export const EDITOR_TOOLS = {
    superScript: Superscript,
    subScript: Subscript,
    changeCase: {
        class: ChangeCase,
        config: {
            showLocaleOption: true, // enable locale case options
            locale: "tr", // or ['tr', 'TR', 'tr-TR']
        },
    },
    strikethrough: Strikethrough,
    Color: {
        class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
        // inlineToolbar: true,
        config: {
            colorCollections: [
                "#EC7878",
                "#9C27B0",
                "#673AB7",
                "#3F51B5",
                "#0070FF",
                "#03A9F4",
                "#00BCD4",
                "#4CAF50",
                "#8BC34A",
                "#CDDC39",
                "#FFF",
            ],
            defaultColor: "#FF1300",
            type: "text",
            customPicker: true, // add a button to allow selecting any colour
        },
    },

    Marker: {
        class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
        config: {
            defaultColor: "#FFBF00",
            type: "marker",
            icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>`,
        },
    },

    code: editorjsCodeflask,
    header: {
        inlineToolbar: true,
        class: Header,
        config: {
            placeholder: "Enter a header",
            levels: [2, 3, 4],
            defaultLevel: 3,
        },
    },

    paragraph: {
        class: Paragraph,
        // inlineToolbar: true,
    },

    embed: {
        class: Embed,
        // inlineToolbar: true,
    },
    image: {
        class: InlineImage,
        // inlineToolbar: true,
        config: {
            embed: {
                display: true,
            },
            unsplash: {
                appName: process.env.NEXT_PUBLIC_UPSPLASH_NAME,
                clientId: process.env.NEXT_PUBLIC_UPSPLASH_CLIENTID,
            },
        },
    },
    inlineCode: InlineCode,
    // link: Link,
    list: {
        class: List,
        // inlineToolbar: true,
    },
    nestedList: NestedList,
    quote: {
        class: Quote,
        // inlineToolbar: true,
    },
    delimiter: Delimiter,
    italic: ItalicInlineTool,
    underline: UnderlineInlineTool,
    bold: {
        class: createGenericInlineTool({
            sanitize: {
                strong: {},
            },
            shortcut: "CMD+B",
            tagName: "STRONG",
            toolboxIcon:
                '<svg class="icon icon--bold" width="12px" height="14px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bold"></use></svg>',
        }),
    },
};
