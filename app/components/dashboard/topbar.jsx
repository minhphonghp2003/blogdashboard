'use client'
import React from 'react'
import Input from '../shared/input'
import { useState } from "react"
import { useRouter } from "next/navigation";
import Link from 'next/link';

function Topbar({user}) {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.replace("/authentication")
  }
  return (
    <div className="z-5 mb-10 navbar sticky top-0 flex shadow-[0_0_0.375rem_0.25rem_rgba(0,0,0,.15)] justify-between bg-[#2b2c40] rounded-lg">
      <div className="grow-[1] flex justify-between">
        <div className="form-control w-[25%]">
          <Input
            placeholder="Search"
          />
        </div>
        <div className=" dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user&&user.avatar}/>
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 bg-[#323249] z-[1] p-2 shadow-[0_0.25rem_1rem_rgba(0,0,0,.2)] menu menu-sm dropdown-content rounded-lg w-52">
            <li>
              <Link href="/dashboard/user/profile" className="justify-between">
                Profile
              </Link>
            </li>
            <li >
              <button onClick={handleLogout} className="justify-between">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Topbar