'use client'
import { useState } from 'react'
import Card from '../shared/card'

function ForgotCard() {
    let [email, setEmail] = useState("")
    let [token, setToken] = useState("")
    const input = [{ title: "Email", setState: setEmail }]
    const handleSubmit = async () => {
        let fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: email

        }
        let response = await fetch(process.env.NEXT_PUBLIC_BACKEND + "auth/recvToken", fetchOptions)
        let respToken = (await response.json()).token
        fetchOptions = {
            method: "POST",

            body: JSON.stringify({
                "to": email,
                "token": respToken,
                "server": "http://localhost:3000/authentication/forgot"
            })
        }

        fetch("https://eow8ijpnrwxsdra.m.pipedream.net", fetchOptions)
        setToken(respToken)
    }
    const header = <div>
        <h4 className="text-white mb-2">Forgot Password 🔒</h4>
        <p className="text-[#a3a4cc]">Enter your email and we'll send you instructions <br /> to reset your password</p>
        <div className={`alert mt-2 ${token ? "" : "hidden"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Email sent.</span>
        </div>
    </div>
    return (
        <Card header={header} logo="/logo.svg" submitText="Send reset link" onBtnSubmit={handleSubmit} input={input} />
    )
}

export default ForgotCard