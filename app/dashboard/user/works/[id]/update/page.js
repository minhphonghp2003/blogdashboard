"use client";
import PostMetadataForm from "@/app/components/new/form";
import TextEditor from "@/app/components/shared/TextEditor";
import Box from "@/app/components/shared/box";
import Loading from "@/app/components/user/works/Loading";
import { addValue, fetchPostData, makeACallTo } from "@/utils/network";
import { download, upload } from "@/utils/storage";
import React, { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

function Update({ params }) {
    const router = useRouter();
    const [cookies] = useCookies(["Authorization"]);
    const token = cookies.Authorization;
    const editorRef = useRef(null);
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
        await upload({
            from: "image",
            path: post.imageLink,
            body: image,
            upsert: true,
        });

        await upload({
            from: "post",
            path: post.postLink,
            body: editorRef.current.getContent(),
            upsert: true,
        });
        let tags = JSON.parse(selectedTag);
        let rList = JSON.parse(selectedRList);
        let topic = JSON.parse(selectedTopic);

        let body = {
            id: post.id,
            title: title,
            foreword: foreword,
            readingListId: rList ? rList[0].id : null,
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
        setImage(await download({ path: data.imageLink, from: "image" }));
        setForeword(data.foreword);
        setContent(await download({ from: "post", path: data.postLink }));
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
                {post && (
                    <div>
                        <TextEditor editorRef={editorRef} initValue={content} />
                        <PostMetadataForm
                            onSave={() => {}}
                            onSubmit={handleSubmit}
                            rlists={rlists}
                            states={states}
                            tags={tags}
                            topics={topics}
                        />
                    </div>
                )}
            </Box>
        </div>
    );
}

export default Update;
