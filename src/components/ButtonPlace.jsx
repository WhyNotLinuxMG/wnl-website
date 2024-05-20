import React from 'react'
import LocalCol from '../assets/images/localColor.png'
import Local from '../assets/images/local.png'
const ButtonPlace = ({place,campus,selectedConf,Selected}) => {
  return (
    <button onClick={()=>selectedConf(place)} className={`text-center pr-5 p-5 mr-8 border border-raven rounded-lg cursor-pointer ${(Selected===place)?"bg-raven":" "}` }>
        <h4 className='text-white font-DMMono text-[18px] md:text-[32px]'>{place}</h4>
        <div className='flex items-center '>
            <img src={Selected===place?Local:LocalCol} alt="" />
            <p className={`font-DMMono capitalize ${Selected===place ? "text-white" : "text-bruning"} ms-4`} >{campus}</p>
        </div>
    </button>
  )
}

export default ButtonPlace