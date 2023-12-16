"use client";
import React, { useEffect, useRef, useState } from "react";
import PostMetadataForm from "@/app/components/new/form";
import { fetchPostData, makeACallTo } from "@/utils/network";
import { upload } from "@/utils/storage";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import TextEditor from "@/app/components/shared/TextEditor";
import { convertString, savePost, strip } from "@/utils/helpder";
import { CardHeader, Divider, Typography } from "@mui/material";
import QuillEditor from "@/app/components/shared/QuillEditor";
import { useQuill } from "react-quilljs";

function Post() {
    const router = useRouter();
    const [cookies] = useCookies(["Authorization"]);
    const token = cookies.Authorization;
    // const editorRef = useRef(null);
    const [selectedTag, setSelectedTag] = useState([]);
    const [selectedRList, setSelectedRList] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [image, setImage] = useState();
    const [content, setContent] = useState();
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
            body: content,
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
        // savePost({ editorRef });
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
                rlists={rlists}
                tags={tags}
                topics={topics}
                states={states}
            />
            {/* <TextEditor editorRef={editorRef} /> */}
            <QuillEditor onChange={setContent} />
        </div>
    );
}

export default Post;
