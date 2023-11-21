"use client";
import Paginate from "@/app/components/shared/paginate";
import Loading from "@/app/components/user/works/Loading";
import Projects from "@/app/components/user/works/Projects";
import React, { useEffect, useState } from "react";

function Works() {
    let [posts, setPosts] = useState([]);
    let [isLoading, setLoading] = useState(true);
    let [current, setCurrent] = useState(1);
    const fetchPosts = async () => {
        let searchParams = {
            page: current,
            limit: "9",
        };
        let fetchedPosts = await (
            await fetch(
                "https://655c5d4925b76d9884fd0e77.mockapi.io/posts?" +
                    new URLSearchParams(searchParams)
            )
        ).json();
        fetchedPosts.map((p) => {
            let update = new Date(p.updated_at);
            let create = new Date(p.created_at);
            p.created_at =
                create.getDate() +
                "-" +
                (create.getMonth() + 1) +
                "-" +
                create.getFullYear() +
                " " +
                create.getHours() +
                ":" +
                create.getMinutes();
            p.updated_at =
                update.getDate() +
                "-" +
                (update.getMonth() + 1) +
                "-" +
                update.getFullYear() +
                " " +
                update.getHours() +
                ":" +
                update.getMinutes();
        });
        setPosts(fetchedPosts);
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
            <div className="grid grid-rows-3 grid-cols-3 gap-5">
                {posts.map((p) => {
                    return <Projects key={p.id} post={p} />;
                })}
            </div>
            <Paginate
                current={current}
                pageCount="10"
                setCurrent={setCurrent}
            />
        </div>
    );
}

export default Works;
