"use client"
import React, { useState } from 'react'
import Box from '../../shared/box'
import Input from '../../shared/input'
import { makeACallTo } from '@/utils/network'
import { useCookies } from "react-cookie";

function Delete({ postDetail }) {
    const [cookies] = useCookies();
    const token = cookies["Auth"];
    let [confirm, setConfirm] = useState("")
    let confirmText = postDetail.topic.name + "/" + postDetail.id
    let handleComfirm = async () => {
        await makeACallTo("post/", "DELETE", { Authorization: token }, postDetail.id)
        await makeACallTo("search/post", "DELETE", { Authorization: token }, postDetail.id)
        alert("Delete post successfully") 
    }
    return (

        <dialog id={postDetail.id} className="modal">
            <Box className="modal-box">
                <div className="relative p-4 ">
                    <div className="relative bg-inherit rounded-lg  ">
                        <div className="text-center">
                            <svg className=" mx-auto mb-4  w-12 h-12 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this post?</h3>
                            <p className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">To comfirm, please type <span className='text-white select-none'>{confirmText}</span> to below box</p>
                            <Input onChange={(e) => { setConfirm(e.target.value) }} isPassword={false} placeholder="Type here" className="mb-4 " />
                            <button onClick={handleComfirm} type="button" disabled={confirm != confirmText ? "disabled" : ""} className={`disabled:bg-gray-600 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center `}>

                                Delete post
                            </button>

                        </div>
                    </div>
                </div>
            </Box>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default Delete