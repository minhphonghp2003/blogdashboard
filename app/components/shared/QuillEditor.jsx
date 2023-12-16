"use client"
import React, { useEffect } from 'react';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import { useQuill } from 'react-quilljs';
export default ({ onChange, initValue, isInit }) => {
    const modules = {
        toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction

            [{ size: ["small", false, "large", "huge"] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],

            ["clean"],
        ],

    };

    const formats = [
        "bold",
        "italic",
        "underline",
        "strike",
        "align",
        "list",
        "indent",
        "size",
        "header",
        "font",
        "code",
        "script",
        "link",
        "image",
        "video",
        "color",
        "background",
        "clean",
        "blockquote",
        "direction",
        "code-block",
        "formula",
    ];
    const { quill, quillRef } = useQuill({modules});
    useEffect(() => {
        if (quill) {
            if (isInit) {
                quill.clipboard.dangerouslyPasteHTML(initValue);

            }

            quill.on('text-change', (delta, oldDelta, source) => {
                onChange(quill.root.innerHTML)
            });
        }
    }, [quill, isInit]);

    return (
        <div className='bg-white text-black m-auto' style={{ height: 300 }}>
            <div className='bg-white' ref={quillRef} />
        </div>
    );
};
