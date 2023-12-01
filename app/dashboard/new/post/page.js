"use client";
import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { createClient } from "@supabase/supabase-js";
import PostMetadataForm from "@/app/components/new/form";
import { saveAs } from "file-saver";
import { makeACallTo } from "@/utils/network";

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

let addLabel = (list) => {
    list.map((l) => {
        l.label = l.name;
    });
};

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

    // let [tags, setTags] = useState();
    // let [rlists, setRLists] = useState();
    // let [topics, setTopics] = useState();
    // let fetchData = async () => {
    //     let tagRes = await makeACallTo("tag/all", "GET");
    //     tags = await tagRes.json();
    //     let rListRes = await makeACallTo("readingList/all", "GET");
    //     rlists = await rListRes.json();
    //     let topicRes = await makeACallTo("topic/all", "GET");
    //     topics = await topicRes.json();
    //     addLabel(tags);
    //     addLabel(rlists);
    //     addLabel(topics);
    //     setRLists(rlists);
    //     setTags(tags);
    //     setTopics(topics);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    let tags = [{ label: "tag1" ,name:"tag1"}, { label: "tag2" ,name:"tag1"}, { label: "tag3" ,name:"tag1"}];
    let rlists = [{ label: "tag,1" }, { label: "tag2" }, { label: "tag3" }];
    let topics = [{ label: "tag1" }, { label: "tag2" }, { label: "tag3" }];
    let handlePost = async () => {
        // console.log(selectedTag,selectedTopic);
        console.log(tags);
        // let value = editorRef.current.getContent();
        // let dataPath = selectedTopic.value + "/" + title + "_" + Date.now();
        // console.log(dataPath);
        // const { data, error } = await supabase.storage
        //     .from("post")
        //     .upload(dataPath, value, {
        //         // cacheControl: "3600",
        //         upsert: true,
        //     });
        // console.log(dataPath);
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
