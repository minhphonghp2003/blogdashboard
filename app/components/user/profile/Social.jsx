import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaTrash } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import Box from '../../shared/box';
function Item({ name, link, icon }) {
    return (
        <div className='flex justify-between'>
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
                    link ? <button type="button" className=" py-3 px-3 me-2 mb-2 text-sm font-medium text-[#ff3e1d] focus:outline-none bg-[#4d2f3a] rounded-lg  hover:bg-[#e6381a] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 ">
                        <FaTrash />
                    </button> :
                        <button type="button" className=" py-3 px-3 me-2 mb-2 text-sm font-medium bg-[#393c50] focus:outline-none rounded-lg  hover:bg-[#788393] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 ">
                            <FaLink />
                        </button>
                }
            </div>
        </div>
    )
}

function Social() {
    let social = [
        { name: "Facebook", link: "", icon: <FaFacebookF color='blue' /> },
        { name: "Instagram", link: "some link", icon: <FaInstagramSquare color='#bc2a8d' /> },
        { name: "Twitter", link: "link", icon: <FaTwitter color='white' /> },
        { name: "Zalo", link: "", icon: <SiZalo /> },
    ]
    return (
        <div className='flex flex-col gap-4'>
            <Box>
                <p className='mb-4'>Social Accounts</p>
                <p className=''>Display content from social accounts on your site</p>
                {
                    social.map(s => {
                        return <Item icon={s.icon} link={s.link} name={s.name} key={s.name} />
                    })
                }

            </Box>
        </div>
    )
}

export default Social