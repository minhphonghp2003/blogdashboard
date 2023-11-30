"use client"
import React, { useState } from 'react'
import Box from '../shared/box'
import Input from '../shared/input'
import Button from '../shared/button'
import { upload } from "@/utils/storage"
import { makeACallTo } from '@/utils/network'
import { useCookies } from 'react-cookie'

function Topic({ className }) {
    const [cookies] = useCookies(['Authorization']);
    const token = cookies.Authorization;
    let [name, setName] = useState("")
    let [icon, setIcon] = useState("")
    let [description, setDesc] = useState("")

    let handleNameChange = (e) => {
        setName(e.target.value)
    }
    let handleDescChange = (e) => {
        setDesc(e.target.value)
    }
    let handleSubmit = async () => {
        const path = "icon/" + name + icon.name
      
        icon = await upload({ from: "image", path, body: icon, upsert: true })
        let data = {
            name: name,
            icon: icon,
            description: description
        }
        let res = await makeACallTo("topic/", "POST", {
            "Authorization": token,
        },JSON.stringify(data))
        let status = res.status
        if (status !== 200) {
            alert("Fail")
            return
        }
        let topic = await res.json()
        if (topic.status == "ACTIVE") {
            alert("Topic created successfully")
        } else {
            alert("Request to create topic sent")
        }
    }

    return (
        <div className={`${className}`}>
            <Box>
                <div className='flex justify-between'>
                    <p className='mb-5 text-lg text-white'>Topic</p>
                    <Button name="Submit" onclick={handleSubmit} />

                </div>
                <Input isPassword={false} placeholder="Name" title="Topic name" onChange={handleNameChange} />
                <label className="block my-4 text-sm font-medium text-white" for="file_input">Upload Topic icon</label>
                <input onChange={e => { setIcon(e.target.files[0]) }} className="block w-full text-sm  border border-gray-300 rounded-lg cursor-pointer  :text-gray-400 focus:outline-none :bg-gray-700 :border-gray-600 :placeholder-gray-400" id="file_input" type="file"></input>
                <p className='mt-6 text-white '>Description</p>
                <textarea onChange={handleDescChange} className="textarea textarea-bordered bg-inherit w-full h-40" placeholder="Description"></textarea>
            </Box>
        </div>
    )
}

export default Topic