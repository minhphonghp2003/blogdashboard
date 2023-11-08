import React from 'react'
import Link from 'next/link'

function LoginForm() {
  return (
    <>
      <div className="form-control w-[100%]">
        <label className="label ">
          <span className="label-text text-xs uppercase text-white">Username</span>

        </label>
        <input type="text" placeholder="Type your username" className="input input-bordered bg-[inherit] text-white" />
      </div>
      <div className="form-control w-[100%]">
        <label className="label">
          <span className="label-text text-xs uppercase text-white">Password</span>

          <Link href="/authentication/forgot"> <span className="label-text-alt text-blue-600">Forgot password?</span></Link>
        </label>
        <input type="password" placeholder="Type your password" className="input input-bordered bg-[inherit] text-white" />
      </div>
      <div className='mt-10 '>
        <button className="bg-[#696cff] text-white  btn btn-block shadow-[0_0.125rem_0.25rem_0_rgba(105,108,255,.4)] hover:bg-[#5f61e6]">Sign in</button>
      </div>
    </>
  )
}

export default LoginForm