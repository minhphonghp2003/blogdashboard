import React from 'react'

function ProfileCard({ className, avatar, name, roles }) {
    return (
        <div className={`${className} flex flex-col items-center`}>
            <div className="avatar">
                <div className="w-24 rounded">
                    <img src={avatar} />
                </div>
            </div>
            <p className='text-[1.375rem] text-white mt-2 mb-1'>{name}</p>
            <div className='flex gap-5'>
                {roles.map(r=>{
                    return <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{r}</span>
                })}

            </div>
        </div>
    )
}

export default ProfileCard