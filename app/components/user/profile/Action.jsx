'use client'
import React from 'react'

function Action() {
  return (
    <div className='flex justify-center mt-10'>
      <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn  text-[white] bg-[#696cff] hover:bg-[#5f61e6] mx-2">Edit</button>
      <button className="btn  text-[#ff3e1d] bg-[#4d2f3a] hover:bg-[#e6381a] hover:text-[white] mx-2 ">Suspend</button>
    </div>
  )
}

export default Action