'use client'
import React from 'react'
import Card from '../shared/card'

function ResetCard() {
    const input = ["New Password", "Confirm Password"]
    const email = "somebody@gmail.com"
    const handleSubmit = ()=>{
        console.log("submited");
    }
    const header = <div>
            <h4 class="text-white mb-2">Reset Password 🔒</h4>
            <p class="text-[#a3a4cc]">for {email}</p>
    </div>
    return (
        <Card header={header} logo="/logo.svg" submitText="Set new password" onSubmit={handleSubmit} input={input}  />
    )
}

export default ResetCard