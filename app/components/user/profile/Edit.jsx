"use client"
import React, { useState } from 'react'
import Input from '../../shared/input'

function Form({ inputs }) {
    return (
        <div className='grid grid-cols-2 grow-[1] gap-4'>
            <Input onChange={e => { inputs.Firstname(e.target.value) }} title="FirstName" placeholder="Your firstname" key="firstname" />
            <Input onChange={e => { inputs.Lastname(e.target.value) }} title="LastName" placeholder="Your lastname" key="lastname" />
            <Input className="col-span-2" onChange={e => { inputs.Username(e.target.value) }} title="Username" placeholder="Your username" key="username" />
            <Input onChange={e => { inputs.Email(e.target.value) }} title="Email" placeholder="Your email" key="email" />
            <Input onChange={e => { inputs.Phone(e.target.value) }} title="Phone" placeholder="Your phone" key="phone" />
        </div>

    )
}

function Action({formValues}) {
    return (
        <div className='flex justify-center mt-8'>
            <button className="btn mx-4 bg-[#696cff] hover:bg-[#5f61e6] text-white">Submit</button>
            <button className="btn mx-4 bg-[#393c50] hover:bg-[#788393] text-white ">Cancle</button>
        </div>
    )
}

function Edit() {
    let [firstName, setFName] = useState("")
    let [lastname, setLName] = useState("")
    let [userName, setUName] = useState("")
    let [email, setEmail] = useState("")
    let [phone, setPhone] = useState("")
    let inputs = {
        Firstname: setFName,
        lastname: setLName,
        Username: setUName,
        Email: setEmail,
        Phone: setPhone
    }
    let formValues = {
        firstName, lastname, userName, email, phone
    }
    return (
        <div className='p-[2rem] flex flex-col justify-center items-between '>
            <Form inputs={inputs} />
            <Action formValues = {formValues} />
        </div>
    )
}

export default Edit