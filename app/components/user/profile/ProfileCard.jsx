import React from 'react'

function ProfileCard({ className, avatar, name, roles }) {
    return (
        <div className={`${className} flex flex-col items-center`}>
            <div className="avatar">
                <div className="w-24 rounded">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <p className='text-[1.375rem] text-[#cbcbe2] mt-2 mb-1'>Name</p>
            <div className='flex gap-5'>
            <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">AUTHOR</span>
            <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">ADMIN</span>

            </div>
        </div>
    )
}

export default ProfileCard