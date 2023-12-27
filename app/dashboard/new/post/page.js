"use client";
import React, { useEffect, useRef, useState } from "react";
import PostMetadataForm from "@/app/components/new/form";
import { fetchPostData, makeACallTo } from "@/utils/network";
import { saveJSON, upload } from "@/utils/storage";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { convertString, savePost, strip } from "@/utils/helpder";
import dynamic from "next/dynamic";
import { CardHeader, Divider, Typography } from "@mui/material";
import NovelEditor from "@/app/components/shared/NovelEditor";
import Preview from "@/app/components/shared/Preview";

const EditorBlock = dynamic(() => import("@/app/components/shared/Editorjs"), {
    ssr: false,
});

function Post() {
    const router = useRouter();
    const [cookies] = useCookies(["Authorization"]);
    const token = cookies.Authorization;
    const [selectedTag, setSelectedTag] = useState([]);
    const [selectedRList, setSelectedRList] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [image, setImage] = useState();
    const [content, setContent] = useState();
    const [title, setTitle] = useState();
    const [fileupload, setUpload] = useState();
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

    useEffect(() => {
        fetchPostData({ rlists, setRLists, setTags, tags, setTopics, topics });
    }, []);

    let handlePost = async () => {
        let path =
            JSON.parse(selectedTopic)[0].value +
            "/" +
            convertString(title) +
            "_" +
            Date.now();
        await upload({
            from: "post",
            path: path,
            body: JSON.stringify(content),
            upsert: true,
        });
        await upload({
            from: "image",
            path: path,
            body: image,
            upsert: true,
        });
        let tags = selectedTag.length > 0 ? JSON.parse(selectedTag) : null;
        let rList = JSON.parse(selectedRList);
        let topic = JSON.parse(selectedTopic);
        let body = {
            title: title,
            foreword: foreword,
            imageLink: path,
            postLink: path,
            readingListId: rList ? rList[0].id : null,
            topicId: topic[0].id,
            tagIds: tags
                ? tags
                      .filter((t) => {
                          if (t.id != undefined) {
                              return t.id;
                          }
                      })
                      .map((e) => {
                          return e.id;
                      })
                : null,
        };
        let res = await makeACallTo(
            "post/",
            "POST",
            { Authorization: token },
            JSON.stringify(body)
        );
        if (res.status == 200) {
            alert("Create Post successfully");
            router.push("/dashboard");
        } else {
            alert("Error. Contact admin for information");
        }
    };
    let handleSave = () => {
        saveJSON({ data: content, fileName: "draft.txt" });
    };
    let handleUpload = (file) => {
        var reader = new FileReader();
        if (file) {
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                try {
                    let uploadData = JSON.parse(evt.target.result);
                    setUpload(uploadData);
                    setContent(uploadData);
                } catch (error) {
                    alert("Cannot upload file");
                }
            };
            reader.onerror = () => {
                alert("Cannot upload file");
            };
        }
    };
    return (
        <div className="mt-10 mb-52 flex flex-col gap-2 ">
            <CardHeader
                title="Create new post"
                titleTypographyProps={{ variant: "h6" }}
            />

            <PostMetadataForm
                onSubmit={handlePost}
                onSave={handleSave}
                onUpload={handleUpload}
                rlists={rlists}
                tags={tags}
                topics={topics}
                states={states}
            />
          
            <EditorBlock
                holder="editorjs-container"
                upload={fileupload}
                onChange={setContent}
            />
        </div>
    );
}

export default Post;
