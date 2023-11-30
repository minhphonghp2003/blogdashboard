"use client"
import React, { useState } from 'react'
import Box from '../shared/box'
import Input from '../shared/input'
import Button from '../shared/button'
import { makeACallTo } from '@/utils/network'
import { useCookies } from 'react-cookie'


function Tag({ className }) {
    const [cookies] = useCookies(['Authorization']);
    const token = cookies.Authorization;
    let [name,setName] = useState("")
    let handleNameChange = (e) => { setName(e.target.value)}
    let handleSubmit =async ()=>{
        let res =await makeACallTo("tag/","POST",{"Authorization":token},name)
        if(res.status==200){
            alert("OK")
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