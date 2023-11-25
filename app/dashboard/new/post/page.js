"use client";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { createClient } from "@supabase/supabase-js";
import PostMetadataForm from "@/app/components/new/form";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
);

function TextEditor({ onPost }) {
    const editorRef = useRef(null);
    let handleSubmit = () => {
        if (editorRef.current) {
            let content = editorRef.current.getContent();
            onPost(content);
        }
    };
    return (
        <>
            <Editor
                onInit={(evt, editor) => (editorRef.current = editor)}
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
    let [content, setContent] = useState("");
    let handlePost = async (value) => {
        setContent(value);
        const { data, error } = await supabase.storage
            .from("post")
            .upload("post/file1", value, {
                cacheControl: "3600",
                upsert: true,
            });
        console.log(data.path);
    };
    return (
        <div className="mt-10 flex flex-col gap-2 ">
            <PostMetadataForm handleSubmit={handlePost} />
            <TextEditor onPost={handlePost} />
        </div>
    );
}

export default Post;
