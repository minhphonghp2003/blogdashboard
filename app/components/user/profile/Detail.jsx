import React from 'react'

function Detail({bio,username,email,status,contact}) {
  return (
    <div className='flex flex-col gap-5'>
      <p><span className='text-white'>Bio:</span> {bio}</p>
      <p><span className='text-white'>Username:</span> {username}</p>
      <p><span className='text-white'>Email:</span> {email} </p>
      <p><span className='text-white'>Status:</span> 
        <span class=" text-sm font-medium ml-2 px-2.5 py-0.5 rounded bg-green-900 text-green-300">{status}</span>
      </p>
      
      <p><span className='text-white'>Contact:</span> {contact}</p>
    </div>
  )
}

export default Detail