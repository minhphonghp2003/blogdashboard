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


function Overview({ classname, postDetail }) {
  let like = 0
  let share = 0
  let view = 0
  if (postDetail) {
    postDetail.map(d => {
      like += d.likeCount ? d.likeCount : 0
      share += d.shareCount ? d.shareCount : 0
      view += d.viewCount ? d.viewCount : 0
    })
  }
  let pointIcon = <button className="btn bg-[#35365f]"><FaCheck /></button>
  let projectIcon = <button className="btn bg-[#35365f]"><GoProjectRoadmap /></button>
  return (
    <div className={`${classname} flex justify-around gap-4`}>
      <DetailBadget icon={pointIcon} name="Point" amount={like * 2 + share * 3 + view +postDetail.length} />
      <DetailBadget icon={projectIcon} name="Project done" amount={postDetail.length} />
    </div>
  )
}

export default Overview