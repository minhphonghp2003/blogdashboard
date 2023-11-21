import React from 'react'

function Box({children, className}) {
  return (
    <div className={` p-[1rem] shadow-[0_0.125rem_0.5rem_0_rgba(0,0,0,.16)] bg-[#2b2c40] rounded-lg ${className}`}>
        {children}
    </div>
  )
}

export default Box 