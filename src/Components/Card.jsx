import { data } from 'autoprefixer';
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data , reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scaleX: 1.1}} dragTransition={{bounceStiffness: 100, bounceDamping: 30}} className=' relative flex-shrink-0 w-56 h-72 rounded-[40px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm mt-8 leading-tight font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full left-0'>
            <div className=' flex justify-between py-4 px-8 items-center mb-3'>
            <h5>{data.filesize}</h5>
            <span className=' w-7 h-7 rounded-full bg-zinc-600 flex justify-center items-center '>
              {data.close ? <IoClose/> : <MdOutlineFileDownload size=".8em" color='#fff'/>}
            </span>
            </div>
            {data.tag.isOpen &&  (
              <div className={`tag w-full py-4 ${data.tag.tagColor  === "blue" ? "bg-blue-600" : "bg-green-600" } flex justify-center items-center`}>
              <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div> 
            )}
        </div>
    </motion.div>
  )
}

export default Card
