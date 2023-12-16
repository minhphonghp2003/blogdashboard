import { saveAs } from "file-saver";

export function parseJwt(token) {
    if (!token) {
        return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
}

export let savePost = ({ editorRef }) => {
    let value = editorRef.current.getContent();
    const file = new Blob([value], {
        type: "text/plain;charset=utf-8",
    });
    saveAs(file, "draft_post.txt");
};

export function strip(string) {
    return string.split(" ").filter(Boolean).join("");
}
export function convertString(phrase) {
    var maxLength = 100;

    var returnString = phrase.toLowerCase();
    //Convert Characters
    returnString = returnString.replace(/ö/g, "o");
    returnString = returnString.replace(/ç/g, "c");
    returnString = returnString.replace(/ş/g, "s");
    returnString = returnString.replace(/ı/g, "i");
    returnString = returnString.replace(/ğ/g, "g");
    returnString = returnString.replace(/ü/g, "u");

    // if there are other invalid chars, convert them into blank spaces
    returnString = returnString.replace(/[^a-z0-9\s-]/g, "");
    // convert multiple spaces and hyphens into one space
    returnString = returnString.replace(/[\s-]+/g, " ");
    // trims current string
    returnString = returnString.replace(/^\s+|\s+$/g, "");
    // cuts string (if too long)
    if (returnString.length > maxLength)
        returnString = returnString.substring(0, maxLength);
    // add hyphens
    returnString = returnString.replace(/\s/g, "-");

    return returnString;
}
