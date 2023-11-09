"use client";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

function TextEditor() {
    const [value, setValue] = useState("");
    const editorRef = useRef(null);
    const submit = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            {" "}
            <button
                onClick={submit}
                className="btn btn-xs h-[3rem] w-[10rem] bg-[#696cff] text-white"
            >
                Post
            </button>
            <Editor
                apiKey="sncffu26ys9pgaa4fp1ozl0g80ttdu6nv00yodyd8zgccgfv"
                init={{
                  selector: 'textarea',
                    plugins:
                        "ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
                    toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                    tinycomments_mode: "embedded",
                    tinycomments_author: "Author name",
                    mergetags_list: [
                        { value: "First.Name", title: "First Name" },
                        { value: "Email", title: "Email" },
                    ],
                    ai_request: (request, respondWith) =>
                        respondWith.string(() =>
                            Promise.reject("See docs to implement AI Assistant")
                        ),
                }}
                initialValue="Welcome to TinyMCE!"
            />
        </>
    );
}

function Post() {
    return (
        <div className="mt-10 flex flex-col gap-2 items-center">
            <TextEditor />
        </div>
    );
}

export default Post;
