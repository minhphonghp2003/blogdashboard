"use client";
import Paginate from "@/app/components/shared/paginate";
import Delete from "@/app/components/user/works/Delete";
import Loading from "@/app/components/user/works/Loading";
import Projects from "@/app/components/user/works/Projects";
import { parseJwt } from "@/utils/helpder";
import { makeACallTo } from "@/utils/network";
import { getPublicUrl } from "@/utils/storage";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function Works() {
    const [cookies] = useCookies(["Auth"]);
    const token = cookies.Auth;
    let userId = token ? parseJwt(token).jti : null;
    let [posts, setPosts] = useState([]);
    let [isLoading, setLoading] = useState(true);
    const fetchPosts = async () => {
        let searchParams = {
            page:0,
            limit: 9999,
            authorId: userId,
            sortBy:"updated_at"
        };
        let res = await makeACallTo(
            `post/all?` +
                new URLSearchParams(searchParams),
            "GET"
        );
        let fetched = await res.json();
        fetched.content.map(async (p) => {
            p.imageLink = await getPublicUrl({
                from: "image",
                path: p.imageLink,
            });
            p.createdAt = p.createdAt.split("T")[0];
            p.updatedAt = p.updatedAt.split("T")[0];
        });

        setPosts(fetched.content);
        setLoading(false);
    };
    useEffect(() => {
        fetchPosts();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <div className="grid grid-cols-3 gap-5">
                {posts.map((p) => {
                    return <Projects key={p.id} post={p} />;
                })}
            </div>
        </div>
    );
}

export default Works;
