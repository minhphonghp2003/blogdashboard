import React from 'react'

function Button({onclick, name}) {
  return (
 <button onClick={onclick} className="bg-[#696cff] text-white  btn  shadow-[0_0.125rem_0.25rem_0_rgba(105,108,255,.4)] hover:bg-[#5f61e6]">{name}</button>
  )
}

export default Button