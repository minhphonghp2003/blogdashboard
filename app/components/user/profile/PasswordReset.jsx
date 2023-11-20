"use client"
import React, { useState } from 'react'
import Box from '../../shared/box'
import Input from '../../shared/input'

function PasswordReset() {
    let [password, setPassword] = useState("")
    let [confirm, setConfirm] = useState("")
    return (
        <Box>
            <div className='flex flex-col justify-start gap-8'>
                <p>Change Password</p>
                <div className="flex items-center p-4 mb-2 text-sm text-[#ffab00] border border-yellow-300 rounded-lg bg-[#4d4036] " role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Warning!</span> Please choose a strong password. These constrains are recommended:
                        <ol>
                            <li>
                                At least 10 characters (and up to 100 characters)
                            </li>
                            <li>
                                At least one lowercase character
                            </li>
                            <li>
                                Inclusion of at least one special character, e.g., ! @ # ?
                            </li>
                        </ol>
                    </div>
                </div>
                <div className='flex gap-8'>
                    <Input isPassword={true} onChange={e => { setPassword(e.target.value) }} placeholder="********" title="Password" key="password" />
                    <Input isPassword={true} onChange={e => { setConfirm(e.target.value) }} placeholder="********" title="Confirm password" key="confirm" />
                </div>
                <button type="button" className="hover:bg-[#5f61e6] bg-blue-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 self-start text-[white]">Change Password</button>

            </div>
        </Box>
    )
}

export default PasswordReset