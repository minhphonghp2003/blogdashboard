"use client"
import React, { useState } from 'react'
import Box from '../shared/box'
import Input from '../shared/input'
import Button from '../shared/button'
import { makeACallTo } from '@/utils/network'
import { useCookies } from 'react-cookie'


function Tag({ className }) {
    const [cookies] = useCookies(['Auth']);
    const token = cookies.Auth;
    let [name,setName] = useState("")
    let handleNameChange = (e) => { setName(e.target.value)}
    let handleSubmit =async ()=>{
        let res =await makeACallTo("tag/","POST",{"Authorization":token},name)
        let tag = await res.json()
        if (tag.status == "ACTIVE") {
            alert("Tag created successfully")
        } else {
            alert("Request to create tag sent")
        }
       
    }
    return (
        <div className={`${className}`}>

            <Box>
                <div className='flex justify-between'>
                    <p className='mb-5 text-lg text-white'>Tag</p>
                    <Button name="Submit" onclick={handleSubmit} />

                </div>
                <Input  isPassword={false} placeholder="Name" title="Tag name" onChange={handleNameChange} />

            </Box>
        </div>
    )
}

export default Tag