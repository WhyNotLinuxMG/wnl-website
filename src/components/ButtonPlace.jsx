import { motion } from 'framer-motion'
import { useState } from 'react'
import Local from '../assets/images/local.png'
import LocalCol from '../assets/images/localColor.png'

const ButtonPlace = ({place,campus,selectedConf,Selected}) => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <motion.button
      onClick={()=>selectedConf(place)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={isOpen?"open":"closed"}
      
      className={`text-center pr-5 p-5 mr-8 border border-ebony rounded-lg cursor-pointer ${(Selected===place)?"bg-ebony":" "}` }>
        <h4 className='text-white font-DMMono text-[18px] md:text-[32px]'>{place}</h4>
        <div className='flex items-center '>
            <img src={Selected===place?Local:LocalCol} alt="" />
            <p className={`font-DMMono capitalize ${Selected===place ? "text-white" : "text-bruning"} ms-4`} >{campus}</p>
        </div>
    </motion.button>
  )
}

export default ButtonPlace