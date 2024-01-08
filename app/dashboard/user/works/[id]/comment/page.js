"use client";
import Button from "@/app/components/shared/button";
import { makeACallTo } from "@/utils/network";
import React, { useEffect, useState } from "react";

let extractReply = ({ comments }) => {
    for (const index in comments) {
        let replies = comments[index]["replies"];
        if (replies) {
            for (const repIndex in replies) {
                comments.push(replies[repIndex]);
            }
        }
    }
};

function Comment({ params }) {
    let [comment, setComment] = useState();

    let handleRemove = ({ id }) => {
        makeACallTo("comment/?commentId=" + id, "DELETE");
        setComment(comment.filter((e) => e.id !== id));
    };

    let fetchComment = async () => {
        let comments = await (
            await makeACallTo("comment/post?postId=" + params.id, "GET")
        ).json();
        extractReply({ comments: comments });
        setComment(comments);
    };
    useEffect(() => {
        fetchComment();
    }, []);
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Content
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {comment &&
                        comment.map((c) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {c.fullName}
                                    </th>
                                    <td className="px-6 py-4">{c.text}</td>
                                    <td className="px-6 py-4 text-right">
                                        <a
                                            href="#"
                                            onClick={() => {
                                                handleRemove({ id: c.id });
                                            }}
                                            className="font-medium text-red-700 "
                                        >
                                            Remove
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default Comment;
