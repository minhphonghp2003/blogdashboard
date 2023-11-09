"use client";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import ReactHtmlParser from 'react-html-parser';

function TextEditor({onPost}) {
    const editorRef = useRef(null);
    let handleSubmit = () => {
        if (editorRef.current) {
            let content = editorRef.current.getContent();
            onPost(content)
        }
    };
    return (
        <>
            <button
                onClick={handleSubmit}
                className="btn btn-xs h-[3rem] w-[10rem] bg-[#696cff] text-white"
            >
                Post
            </button>{" "}
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                id="editor"
                apiKey="sncffu26ys9pgaa4fp1ozl0g80ttdu6nv00yodyd8zgccgfv"
                init={{
                    selector: "textarea",
                    plugins:
                        "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion",
                    toolbar:
                        "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
                }}
            />
        </>
    );
}

function Post() {
    let [content,setContent]= useState("")
    let handlePost = (data) => {
        console.log(data);
        setContent(data)
    };
    return (
        <div className="mt-10 flex flex-col gap-2 items-center">
            <TextEditor onPost={handlePost} />
             {/* <div>{ ReactHtmlParser(content) }</div> */}
        </div>
    );
}

export default Post;
