
import React from 'react'
import Input from './input'
import Image from 'next/image'

function Card({ logo, header, submitText, onBtnSubmit, ...input }) {

    return (
        <main className='p-[1.5rem] rounded-lg bg-[#2b2c40] flex flex-col items-center shadow-[0_0.125rem_0.5rem_0_rgba(0,0,0,.16)]'>
            <a href='/'>

                <Image src={logo} width="100" height="100" />
            </a>
            <div className=''>{header}</div>
            {input.input.map(i => {
                return <Input onChange={(e) => { i.setState(e.target.value) }} key={i.title} isPassword={i.title.toLowerCase().includes("password")} title={i.title} placeholder={`Type ${i.title}`} />
            })}
            <div className='w-full mt-3'><button onClick={onBtnSubmit} className="btn w-full mt-3 bg-[#696cff] shadow-[0_0.125rem_0.25rem_0_rgba(105,108,255)] border-[#696cff] hover:bg-[#5f61e6] text-white">{submitText}</button>
            </div>
        </main>
    )
}

export default Card