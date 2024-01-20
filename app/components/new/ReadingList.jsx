"use client"
import React, { useState } from 'react'
import Box from '../shared/box'
import Input from '../shared/input'
import Button from '../shared/button'
import { useCookies } from 'react-cookie'
import { upload } from '@/utils/storage'
import { makeACallTo } from '@/utils/network'

function ReadingList({ className }) {
    const [cookies] = useCookies(['Auth']);
    const token = cookies.Auth;
    let [name, setName] = useState("")
    let [image, setImage] = useState("")
    let [description, setDesc] = useState("")

    let handleNameChange = (e) => {
        setName(e.target.value)
    }
    let handleDescChange = (e) => {
        setDesc(e.target.value)
    }
    let handleSubmit = async () => {
        const path = "readingList/" + name 

        image = await upload({ from: "image", path, body: image, upsert: true })
        let data = {
            name: name,
            image: path,
            description: description
        }
        let res = await makeACallTo("readingList/", "POST", {
            "Authorization": token,
        }, JSON.stringify(data))
        let status = res.status
        if (status !== 200) {
            alert("Fail")
            return
        }

        alert("Reading list created successfully")
    }

    return (
        <div className={`${className}`}>
            <Box >
                <div className='flex justify-between'>
                    <p className='mb-5 text-lg text-white'>Reading list</p>
                    <Button name="Submit" onclick={handleSubmit} />

                </div>
                <Input isPassword={false} placeholder="Name" title="Reading list name" onChange={handleNameChange} />
                <label className="block my-4 text-sm font-medium text-white" for="file_input">Upload Reading list image</label>
                <input onChange={e => { setImage(e.target.files[0]) }} className="block w-full text-sm  border border-gray-300 rounded-lg cursor-pointer  :text-gray-400 focus:outline-none :bg-gray-700 :border-gray-600 :placeholder-gray-400" id="file_input" type="file"></input>
                <p className='mt-6 text-white '>Description</p>
                <textarea maxLength="80" onChange={handleDescChange} className="textarea textarea-bordered bg-inherit w-full h-10" placeholder="Description"></textarea>


            </Box>
        </div>
    )
}

export default ReadingList