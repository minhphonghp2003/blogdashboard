"use client";
import Paginate from "@/app/components/shared/paginate";
import Delete from "@/app/components/user/works/Delete";
import Loading from "@/app/components/user/works/Loading";
import Projects from "@/app/components/user/works/Projects";
import { parseJwt } from "@/utils/helpder";
import { makeACallTo } from "@/utils/network";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function Works() {
    const [cookies] = useCookies(["Authorization"]);
    const token = cookies.Authorization;
    let userId =token? parseJwt(token).jti:null;
    let [posts, setPosts] = useState([]);
    let [isLoading, setLoading] = useState(true);
    let [current, setCurrent] = useState(1);
    let [pageCount, setPageCount] = useState(1);
    const fetchPosts = async () => {
        let searchParams = {
            page: current - 1,
            limit: "9",
            authorId: userId,
        };
        let res = await makeACallTo(
            "post/author?" + new URLSearchParams(searchParams),
            "GET"
        );
        let fetched = await res.json();
        fetched.content.map((p) => {
           p.createdAt = p.createdAt.split("T")[0] 
           p.updatedAt = p.updatedAt.split("T")[0] 
        });
        
        setPosts(fetched.content);
        setPageCount(fetched.totalPages)
        setLoading(false);
    };
    useEffect(() => {
        fetchPosts();
    }, [current]);

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
            <Paginate
                current={current}
                pageCount={pageCount}
                setCurrent={setCurrent}
            />
        </div>
    );
}

export default Works;
