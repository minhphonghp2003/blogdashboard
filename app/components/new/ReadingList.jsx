"use client"
import React from 'react'
import Box from '../shared/box'
import Input from '../shared/input'
import Button from '../shared/button'

function ReadingList({ className }) {
    let handleNameChange = () => {
        return
    }
    let handleSubmit = () => { }
    return (
        <div className={`${className}`}>
            <Box >
                <div className='flex justify-between'>
                    <p className='mb-5 text-lg text-white'>Reading list</p>
                    <Button name="Submit" onclick={handleSubmit} />

                </div>
                <Input isPassword={false} placeholder="Name" title="Reading list name" onChange={handleNameChange} />
                <label className="block my-4 text-sm font-medium text-white" for="file_input">Upload reading list image</label>
                <input onChange={e => { }} className="block w-full text-sm  border border-gray-300 rounded-lg cursor-pointer  :text-gray-400 focus:outline-none :bg-gray-700 :border-gray-600 :placeholder-gray-400" id="file_input" type="file"></input>
                <p className='mt-6 text-white '>Description</p>
                <textarea className="textarea textarea-bordered bg-inherit w-full h-40" placeholder="Description"></textarea>

            </Box>
        </div>
    )
}

export default ReadingList