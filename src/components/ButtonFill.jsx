import React from 'react'

const ButtonFill = ({content}) => {
  return (
    
    <div className='border border-yellow text-white  p-1 rounded-full w-[230px] text-center flex items-center justify-evenly font-DMMono mt-5 mb-5'>
            <p>WNL 2.0 </p>
            <div className='bg-yellow w-[5px] h-[5px] rounded-full'></div>
            <p>{content}</p>
          </div>
  )
}

export default ButtonFill