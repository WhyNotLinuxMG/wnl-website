import React from 'react'
import Vector from '../assets/images/Vector.png'

const Button = ({content}) => {
  return (
    <>
        <div className='flex w-[300px] border border-raven  rounded-md items-center justify-center p-2   '>
            <a className='text-white capitalize mr-6 font-DMMono text-nowrap hover:text-bruning' target='_blank' href='http://whynotlinux@iteam-s.mg '>{content}</a>
            <img className='object-contain' src={Vector} alt="" />
        </div>
    </>
  )
}

export default Button