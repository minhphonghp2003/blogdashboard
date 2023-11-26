"use client";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { createClient } from "@supabase/supabase-js";
import PostMetadataForm from "@/app/components/new/form";
import { saveAs } from "file-saver";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
);

function TextEditor({ editorRef }) {
    return (
        <div className="z-0">
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
        </div>
    );
}
function Post() {
    const editorRef = useRef(null);
    const [selectedTag, setSelectedTag] = useState(null);
    const [selectedRList, setSelectedRList] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [foreword, setForeword] = useState();

    const states = {
        tag: {
            selectedTag,
            setSelectedTag,
        },
        rList: {
            selectedRList,
            setSelectedRList,
        },
        topic: {
            selectedTopic,
            setSelectedTopic,
        },
        image: {
            image,
            setImage,
        },
        title: {
            title,
            setTitle,
        },
        foreword: {
            foreword,
            setForeword,
        },
    };

    const tags = [
        { id: 1, value: "chocolate", label: "Chocolate" },
        { id: 2, value: "strawberry", label: "Strawberry" },
        { id: 3, value: "vanilla", label: "Vanilla" },
    ];
    const rlists = [
        { id: 1, value: "rl1", label: "RL1" },
        { id: 2, value: "rl2", label: "Rl2" },
        { id: 3, value: "rl3", label: "R3" },
    ];
    const topics = [
        { id: 1, value: "t1", label: "T1" },
        { id: 2, value: "t2", label: "T2" },
        { id: 3, value: "t3", label: "T3" },
    ];

    let handlePost = async () => {
        let value = editorRef.current.getContent();
        let dataPath = selectedTopic.value + "/" + title + "_" + Date.now()
        console.log(dataPath);
        const { data, error } = await supabase.storage
            .from("post")
            .upload(dataPath, value, {
                // cacheControl: "3600",
                upsert: true,
            });
        console.log(dataPath);
        // TODO: Backend
    };
    let handleSave = async () => {
        let value = editorRef.current.getContent();
        const file = new Blob([value], {
            type: "text/plain;charset=utf-8",
        });
        saveAs(file, "draft_post.txt");
    };

    return (
        <div className="mt-10 mb-52 flex flex-col gap-2 ">
            <PostMetadataForm
                onSubmit={handlePost}
                onSave={handleSave}
                rlists={rlists}
                tags={tags}
                topics={topics}
                states={states}
            />
            <TextEditor editorRef={editorRef} />
        </div>
    );
}

export default Post;
