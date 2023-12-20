"use client";
import PostMetadataForm from "@/app/components/new/form";
import Box from "@/app/components/shared/box";
import Loading from "@/app/components/user/works/Loading";
import { addValue, fetchPostData, makeACallTo } from "@/utils/network";
import { download, upload } from "@/utils/storage";
import React, { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Editorjs from "@/app/components/shared/Editorjs";

const EditorBlock = dynamic(() => import("@/app/components/shared/Editorjs"), {
  ssr: false,
});

function Update({ params }) {
    const router = useRouter();
    const [cookies] = useCookies(["Authorization"]);
    const token = cookies.Authorization;
    const [selectedTag, setSelectedTag] = useState([]);
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
    let [content, setContent] = useState();
    let [post, setPost] = useState();

    let handleSubmit = async () => {
        if (image) {
            await upload({
                from: "image",
                path: post.imageLink,
                body: image,
                upsert: true,
            });
        }
        await upload({
            from: "post",
            path: post.postLink,
            body: JSON.stringify(content),
            upsert: true,
        });
        let tags = JSON.parse(selectedTag);
        let rList = JSON.parse(selectedRList);
        let topic = JSON.parse(selectedTopic);

        let body = {
            id: post.id,
            title: title,
            foreword: foreword,
            readingListId: rList[0] ? rList[0].id : null,
            topicId: topic[0].id,
            tagIds: tags
                ? tags
                      .filter((t) => {
                          console.log(t.id);
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
            "PUT",
            { Authorization: token },
            JSON.stringify(body)
        );
        if (res.status == 200) {
            alert("Update successfully");
            router.push("/dashboard/user/works");
        } else {
            alert("Error. Contact admin for information");
        }
    };
    let fetchPost = async () => {
        let res = await makeACallTo(`post/?id=${params.id}`, "GET");
        let data = await res.json();
        setPost(data);
        setTitle(data.title);
        setForeword(data.foreword);
        setContent(JSON.parse(await download({ from: "post", path: data.postLink })));
        addValue(data.tags);
        setSelectedTag(JSON.stringify(data.tags));
        setSelectedRList(JSON.stringify([data.readingList]));
        setSelectedTopic(JSON.stringify([data.topic]));
    };
    useEffect(() => {
        fetchPost();
        fetchPostData({ rlists, setRLists, setTags, tags, setTopics, topics });
    }, []);
    return (
        <div>
            <Box>
                <p className="text-lg text-white mb-5">Update</p>
                {!post && <Loading />}
                {post && content && (
                    <div>
                        <PostMetadataForm
                            onSave={() => {}}
                            onSubmit={handleSubmit}
                            rlists={rlists}
                            states={states}
                            tags={tags}
                            topics={topics}
                        />
                        {/* <NovelEditor
                            onChange={setContent}
                            defaultValue={content}
                        /> */}
                        <EditorBlock data={content} holder="update-editor" onChange={setContent}/>
                        
                    </div>
                )}
            </Box>
        </div>
    );
}

export default Update;
