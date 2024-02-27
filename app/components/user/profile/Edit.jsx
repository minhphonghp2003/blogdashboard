"use client"
import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Input from '../../shared/input'
import { CookiesProvider, useCookies } from "react-cookie";
import { upload } from '@/utils/storage';
import { strip } from '@/utils/helpder';

function Form({ inputs, values }) {
    return (
        <div className='grid grid-cols-2 grow-[1] gap-4'>
            <Input className="col-span-2" onChange={e => { inputs.FullName(e.target.value) }} title="Fullname" placeholder={values.fullName} key="fullname" />
            <Input className="col-span-2" onChange={e => { inputs.Bio(e.target.value) }} title="Bio" placeholder={values.bio} key="bio" />

            <form className="max-w-lg mx-auto">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload avatar</label>
                <input onChange={e => { inputs.Avatar(e.target.files[0]); }} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm you are logged into your account</div>
            </form>
            <Input onChange={e => { inputs.Email(e.target.value) }} title="Email" placeholder={values.email} key="email" />
            <Input onChange={e => { inputs.Phone(e.target.value) }} title="Phone" placeholder={values.phone} key="phone" />
        </div>

    )
}

function Action({ formValues }) {
    const [cookies] = useCookies(['Auth']);
    const token = cookies.Authorization;
    let handleSubmit = async (e) => {
        let avatarFile = formValues.avatar
        if (avatarFile) {
            const avatarPath = "avatar/" + formValues.username
            await upload({ from: "image", path: avatarPath, body: avatarFile, upsert: true })
        }
        let body = {
            fullName: formValues.fullName,
            phone: formValues.phone,
            bio: formValues.bio,
            email: formValues.email
        }

        let fetchOption = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(body),
        }
        try {
            await fetch(process.env.NEXT_PUBLIC_BACKEND + "user/userDetail", fetchOption)
            alert("Update user successfully")

        } catch (error) {
            console.log(error);
            alert("Error, please try again")
        }

    }
    return (
        <div className='flex justify-center mt-8'>
            <button onClick={handleSubmit} className="btn mx-4 bg-[#696cff] hover:bg-[#5f61e6] text-white">Submit</button>
        </div>
    )
}

function Edit({ userDetail }) {
    let [fullName, setFName] = useState(userDetail.userInformation.fullName)
    let [email, setEmail] = useState(userDetail.email)
    let [phone, setPhone] = useState(userDetail.userInformation.phone)
    let [bio, setBio] = useState(userDetail.userInformation.bio)
    let [avatar, setAvatar] = useState()
    let username = userDetail.username
    let inputs = {
        FullName: setFName,
        Email: setEmail,
        Phone: setPhone,
        Bio: setBio,
        Avatar: setAvatar
    }
    let formValues = {
        fullName, email, phone, bio, avatar, username
    }

    return (
        <div className='p-[2rem] flex flex-col justify-center items-between '>
            <Form values={formValues} inputs={inputs} />
            <Action formValues={formValues} />
        </div>
    )
}

export default Edit