"use client"
import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaTrash } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Box from '../../shared/box';
import Input from '../../shared/input';
import Button from '../../shared/button';

function LinkBox({ userId, name }) {
    let [link, setLink] = useState()
    let handleLink = async () => {
        if (!link) {
            return
        }
        let body = {
            userId: userId,
            link: link,
            name: name
        }
        let fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }
        let res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "user/userSocial", fetchOption)
        if (res.status == 200) {
            alert("Success")
        } else {

            alert("Unsuccess")
        }

    }
    return <Box>
        <p>Link to {name}</p>
        <Input className="mt-4 mb-4" onChange={(e) => { setLink(e.target.value) }} placeholder="Link" />
        <Button onclick={handleLink} name="Submit" />
    </Box>
}

function Item({ id, name, link, icon, userId }) {
    let handleDelete = async () => {
        let fetchOption = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: id
        }
        let res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "user/userSocial", fetchOption)
        if (res.status == 200) {
            alert("Success")
        } else {

            alert("Unsuccess")
        }
    }
    return (
        <div className='flex justify-between'>
            <dialog id={name} className="modal">
                <div className="modal-box bg-inherit">
                    <LinkBox name={name} userId={userId}></LinkBox>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <div className='flex items-center '>
                {icon}
                <div className='flex flex-col ml-6'>
                    <p>{name}</p>
                    {
                        link ? <a href={link} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">@{link}</a> : <p className='text-[85%]'>Not connected</p>
                    }
                </div>
            </div>
            <div>
                {
                    link ? <button onClick={handleDelete} type="button" className=" py-3 px-3 me-2 mb-2 text-sm font-medium text-[#ff3e1d] focus:outline-none bg-[#4d2f3a] rounded-lg  hover:bg-[#e6381a] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 ">
                        <FaTrash />
                    </button> :
                        <button onClick={() => { document.getElementById(name).showModal() }} type="button" className=" py-3 px-3 me-2 mb-2 text-sm font-medium bg-[#393c50] focus:outline-none rounded-lg  hover:bg-[#788393] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 ">
                            <FaLink />
                        </button>
                }
            </div>
        </div>
    )
}

function Social({ socials, userId }) {


    let social = [
        { id: "", name: "Facebook", link: "", icon: <FaFacebookF color='blue' /> },
        { id: "", name: "Instagram", link: "", icon: <FaInstagramSquare color='#bc2a8d' /> },
        { id: "", name: "Twitter", link: "", icon: <FaTwitter color='white' /> },
        { id: "", name: "Zalo", link: "", icon: <SiZalo /> },
    ]

    return (
        <div className='flex flex-col gap-4'>
            <Box>
                <p className='mb-4 text-white text-lg'>Social Accounts</p>
                <p className=''>Display content from social accounts on your site</p>
                {
                    social.map(s => {
                        socials.map(e => {
                            if (e.name === s.name) {
                                s.id = e.id
                                s.link = e.link
                            }
                        })
                        return <Item userId={userId} id={s.id} icon={s.icon} link={s.link} name={s.name} key={s.name} />
                    })
                }

            </Box>
        </div>
    )
}

export default Social