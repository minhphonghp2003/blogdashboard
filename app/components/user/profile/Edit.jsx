"use client"
import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Input from '../../shared/input'
import { CookiesProvider, useCookies } from "react-cookie";



const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)



function Form({ inputs, values }) {
    return (
        <div className='grid grid-cols-2 grow-[1] gap-4'>
            <Input onChange={e => { inputs.Firstname(e.target.value) }} title="FirstName" placeholder={values.firstname} key="firstname" />
            <Input onChange={e => { inputs.Lastname(e.target.value) }} title="LastName" placeholder={values.lastname} key="lastname" />
            <Input className="col-span-2" onChange={e => { inputs.Bio(e.target.value) }} title="Bio" placeholder={values.bio} key="bio" />

            <form className="max-w-lg mx-auto">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload avatar</label>
                <input onChange={e => { inputs.Avatar(e.target.files[0]); }} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
            </form>
            <Input onChange={e => { inputs.Email(e.target.value) }} title="Email" placeholder={values.email} key="email" />
            <Input onChange={e => { inputs.Phone(e.target.value) }} title="Phone" placeholder={values.phone} key="phone" />
        </div>

    )
}

function Action({ formValues }) {
    const [cookies] = useCookies(['Authorization']);
    const token = cookies.Authorization;
    let handleSubmit = async (e) => {
        let fullname = formValues.firstname + " " + formValues.lastname
        let avatarFile = formValues.avatar
        let avatar = formValues.oldAvatar
        if (avatarFile.name) {

            const avatarPath = "avatar/" + formValues.email + "/" + avatarFile.name
            let { data, error } = await supabase
                .storage
                .from('image')
                .upload(avatarPath, avatarFile, {
                    cacheControl: '3600',
                    upsert: true
                })
            data = supabase
                .storage
                .from('image')
                .getPublicUrl(avatarPath)
            avatar = data.data.publicUrl
        }
        let body = {
            fullName: fullname,
            phone: formValues.phone,
            bio: formValues.bio,
            username: formValues.username,
            avatar:avatar,
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
        let result = await fetch(process.env.NEXT_PUBLIC_BACKEND + "user/userDetail", fetchOption)
        if (result.status >= 400) {
            alert("Error, please try again")
        } else {
            alert("Update user successfully")
        }


    }
    return (
        <div className='flex justify-center mt-8'>
            <button onClick={handleSubmit} className="btn mx-4 bg-[#696cff] hover:bg-[#5f61e6] text-white">Submit</button>
        </div>
    )
}

function Edit({ userDetail }) {
    let [firstname, setFName] = useState(userDetail.fullName.split(" ")[0])
    let [lastname, setLName] = useState(userDetail.fullName.split(" ")[1])
    let [email, setEmail] = useState(userDetail.email)
    let [phone, setPhone] = useState(userDetail.phone)
    let [bio, setBio] = useState(userDetail.bio)
    let [avatar, setAvatar] = useState(userDetail.avatar)
    let inputs = {
        Firstname: setFName,
        Lastname: setLName,
        Email: setEmail,
        Phone: setPhone,
        Bio: setBio,
        Avatar: setAvatar
    }
    let oldAvatar = userDetail.avatar
    let formValues = {
        firstname, lastname, email, phone, bio, avatar, oldAvatar
    }

    return (
        <div className='p-[2rem] flex flex-col justify-center items-between '>
            <Form values={formValues} inputs={inputs} />
            <Action formValues={formValues} />
        </div>
    )
}

export default Edit