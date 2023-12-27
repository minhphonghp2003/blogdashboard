import React, { useEffect, useState } from 'react'
import Box from '../../shared/box'
import Image from 'next/image'
import { CiMenuKebab } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import Delete from './Delete';
import Link from 'next/link';


function Title({ img, title, views }) {
  return (
    <div className='flex gap-4 '>
      <img className='rounded-full' src={img} alt="postimg" width="50" height="50" />
      <div className='flex flex-col '>
        <p className='text-white font-medium text-lg'>{title}</p>
        <span className="self-start bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"> {views} Views</span>
      </div>
    </div>
  )
}


function Header({ img, id, title, views }) {
  return (
    <div className='flex justify-between'>
      <Title img={img} title={title} views={views}></Title>
      <div className='self-center text-white'>
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn m-1 bg-transparent border-none hover:bg-transparent">
            <CiMenuKebab />
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu rounded-box w-52">
            <Box className="bg-[#323249]">
              <li><Link href={`./works/${id}`}>Details</Link></li>
              <div className="divider mb-1 mt-1"></div>
              <li ><a  onClick={()=>document.getElementById(id).showModal()} className='text-[red] hover:text-[white] hover:bg-[red]'>Delete post</a></li>
            </Box>
          </ul>


        </div>
      </div>
    </div>
  )
}
function Statistic({ likes, shares, created, updated }) {
  return (
    <div className='mt-4 flex justify-between'>
      <Box className="bg-[rgba(255,255,255,.03)] p-2">
        <div className='flex flex-col '>
          <p>Likes:<span className='text-white'> {likes}</span> </p>
          <p>Shared:<span className='text-white'> {shares}</span></p>
        </div>
      </Box>
      <div className='flex flex-col self-center'>
        <p>
          <span className='text-white'> Created date:</span> {created}
        </p>
        <p>
          <span className='text-white'> Updated date:</span> {updated}
        </p>


      </div>

    </div>
  )
}
function Footer({ tags, topic, readingList, cmts }) {
  return (
    <div className='flex justify-between  '>
      <div className='flex flex-wrap w-[70%] gap-1'>
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{topic}</span>
        {readingList && <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{readingList.name}</span>}
        {tags.map(
          t => {
            return <span key={t.name} class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{t.name}</span>

          }
        )}

      </div>

      <div className=''>
        <FaRegCommentAlt className='inline' />
        {cmts}
      </div>

    </div>
  )
}

function Projects({ post }) {
  return (
    <Box>
      <Delete postDetail={post}/>
      <div className='flex flex-col gap-4'>
        <Header img={post.imageLink} id={post.id} title={post.title} views={post.postStatistic.viewCount} ></Header>
        <Statistic created={post.createdAt} likes={post.likeReader.length} shares={post.postStatistic.shareCount} updated={post.updatedAt} ></Statistic>
        <p>{post.foreword}</p>
        <div className="divider"></div>
        <Footer cmts={post.comment? post.comments.length:0} readingList={post.readingList} tags={post.tags} topic={post.topic.name} ></Footer>
      </div>
    </Box>
  )
}

export default Projects