import React from 'react'

function Detail() {
  return (
    <div className='flex flex-col gap-5'>
      <p>Username: my username</p>
      <p>Email: my email</p>
      <p>Status:
        <span class=" text-sm font-medium ml-2 px-2.5 py-0.5 rounded bg-green-900 text-green-300">Active</span>
      </p>
      <p>Roles: my roles</p>
      <p>Contact: my contact</p>
    </div>
  )
}

export default Detail