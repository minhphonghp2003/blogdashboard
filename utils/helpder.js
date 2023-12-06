import { saveAs } from "file-saver";



export function parseJwt(token) {
    if (!token) {
        return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
}

export let savePost = ({editorRef}) => {
    let value = editorRef.current.getContent();
    const file = new Blob([value], {
        type: "text/plain;charset=utf-8",
    });
    saveAs(file, "draft_post.txt");
};

export function strip(string) {
    return string.split(' ').filter(Boolean).join('');;
}