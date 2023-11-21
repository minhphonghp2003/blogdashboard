import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";



function DetailBadget({ icon, name, amount }) {
  return (
    <div className='flex justify-between'>
      <div className='mr-3 '>{icon}</div>
      <div className='flex flex-col'>
        <p className='text-white'>{amount}</p>
        <p>{name}</p>
      </div>
    </div>
  )
}


function Overview({ classname }) {
  let pointIcon = <button className="btn bg-[#35365f]"><FaCheck/></button>
  let projectIcon = <button className="btn bg-[#35365f]"><GoProjectRoadmap /></button>
  return (
    <div className={`${classname} flex justify-around gap-4`}>
      <DetailBadget icon={pointIcon} name="Point" amount="14" />
      <DetailBadget icon={projectIcon} name="Project done" amount="24" />
    </div>
  )
}

export default Overview