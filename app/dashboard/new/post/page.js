"use client";
import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { createClient } from "@supabase/supabase-js";
import PostMetadataForm from "@/app/components/new/form";
import { saveAs } from "file-saver";
import { makeACallTo } from "@/utils/network";
import { upload } from "@/utils/storage";
import { useCookies } from "react-cookie";
import { useRouter } from 'next/navigation'

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
    const router = useRouter()
    const [cookies] = useCookies(["Authorization"]);
    const token = cookies.Authorization;
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

    let [tags, setTags] = useState([]);
    let [rlists, setRLists] = useState([]);
    let [topics, setTopics] = useState([]);
    let fetchData = async () => {
        let tagRes = await makeACallTo("tag/all", "GET");
        tags = await tagRes.json();
        let rListRes = await makeACallTo("readingList/all", "GET");
        rlists = await rListRes.json();
        let topicRes = await makeACallTo("topic/all", "GET");
        topics = await topicRes.json();
        addLabel(tags);
        addLabel(rlists);
        addLabel(topics);
        setRLists(rlists);
        setTags(tags);
        setTopics(topics);
    };

    useEffect(() => {
        fetchData();
    }, []);

    let handlePost = async () => {
        let content = editorRef.current.getContent();
        let contentPath =
            JSON.parse(selectedTopic)[0].value + "/" + title + "_" + Date.now();
        contentPath = await upload({
            from: "post",
            path: contentPath,
            body: content,
            upsert: true,
        });
        let imagePath =
            JSON.parse(selectedTopic)[0].value + "/" + title + "_" + Date.now();
        imagePath = await upload({
            from: "image",
            path: imagePath,
            body: image,
            upsert: true,
        });
        let tags = JSON.parse(selectedTag);
        let rList = JSON.parse(selectedRList);
        let topic = JSON.parse(selectedTopic);
        let body = {
            title: title,
            foreword: foreword,
            imageLink: imagePath,
            postLink: contentPath,
            readingListId: rList ? rList[0].id : null,
            topicId: topic[0].id,
            tagIds: tags
                ? tags.map((t) => {
                      return t.id;
                  })
                : null,
        };
        let res = await makeACallTo("post/", "POST", {"Authorization":token},JSON.stringify(body));
        if(res.status==200){
            alert("Create Post successfully")
            router.push("/dashboard")
        }else{
            console.log(res);
        }
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
