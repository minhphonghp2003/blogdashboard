import React from 'react'

function Input({ title, placeholder, isPassword, onChange }) {
  return (
    <div className="form-control w-full ">
      <label className={`${title ? "label" : "hidden"}`}>
        <span className="text-white label-text">{title}</span>
      </label>
      <input onChange={onChange} type={isPassword ? "password" : "text"} placeholder={placeholder} className="input bg-[inherit] text-[#a3a4cc] input-bordered w-full " />
    </div>
  )
}

export default Input