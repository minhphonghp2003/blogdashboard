'use client'
import React, { useState } from 'react'
import Card from '../shared/card'
import { useSearchParams } from 'next/navigation'

function ResetCard() {
    let [newPass, setNewPass] = useState("")
    let [confirm, setConfirm] = useState("")
    let [isTheSame, setTheSame] = useState(true)
    let [isSent, setSent] = useState(false)
    let params = useSearchParams()
    const input = [{
        title: "New Password",
        setState: setNewPass,
    }, {
        title: "Confirm Password",
        setState: setConfirm
    }]
    const handleSubmit = async () => {
        if (newPass !== confirm) {
            setTheSame(false)
            return
        }
        setTheSame(true)
        console.log(newPass, confirm, params.get("id"));
        let token = params.get("id")
        let fetchOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: token,
                password: newPass
            })

        }
        fetch(process.env.NEXT_PUBLIC_BACKEND + "user/password", fetchOptions)
        setSent(true)
    }

    const header = <div>
        <h4 className="text-white mb-2">Reset Password 🔒</h4>
        <p className="text-[#a3a4cc]">Type strong password</p>
        <div className={`${!isTheSame ? " " : "hidden"} mt-3 alert alert-error`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error! New password can confirm password are not the same.</span>
        </div>
        <div className={`${isSent ? " " : "hidden"} mt-3 alert alert-info`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Success.</span>
        </div>
    </div>
    return (
        <Card header={header} logo="/logo.svg" submitText="Set new password" onBtnSubmit={handleSubmit} input={input} />
    )
}

export default ResetCard