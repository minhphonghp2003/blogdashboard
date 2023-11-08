'use client'
import React from 'react'
import Card from '../shared/card'

function ForgotCard() {
    const input = ["Email"]
    const handleSubmit = ()=>{
        console.log("submited");
    }
    const header = <div>
            <h4 class="text-white mb-2">Forgot Password 🔒</h4>
            <p class="text-[#a3a4cc]">Enter your email and we'll send you instructions <br/> to reset your password</p>
    </div>
    return (
        <Card header={header} logo="/logo.svg" submitText="Send reset link" onSubmit={handleSubmit} input={input}  />
    )
}

export default ForgotCard