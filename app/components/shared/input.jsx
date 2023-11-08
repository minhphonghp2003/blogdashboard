import React from 'react'

function Input({title, placeholder, isPassword}) {
  return (
    <div className="form-control w-full ">
    <label className="label">
      <span className="text-white label-text">{title}</span>
    </label>
    <input type={isPassword?"password":"text"} placeholder={placeholder} className="input bg-[inherit] text-[#a3a4cc] input-bordered w-full " />
  </div>
  )
}

export default Input