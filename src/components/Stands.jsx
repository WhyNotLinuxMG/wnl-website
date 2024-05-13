import React from 'react'
import Vector from '../assets/images/Vector.png'
const Stands = ({image,number}) => {
  return (
    <div className='m-5'>
        <div className='flex items-center '>
            <div className='w-[22px] h-[1px] bg-white mr-1'></div>
            <p className='font-DMMono text-raven'>n°{number}</p>
        </div>
        <div className='mt-5 mb-7'>
                    <img src={image} alt="" />
        </div>
        <div className='mb-5'>
            <h4 className='pb-3 text-bruning font-DMMono text-[22px]'>Salle d'exposition</h4>
            <ul className='ml-9'>
                <li className='list-disc text-white font-DMMono'>Question pour un champion</li>
                <li className='list-disc text-white font-DMMono'>Défi de Shell Scripting</li>
                <li className='list-disc text-white font-DMMono'>Desktop Challenge</li>
            </ul>
        </div>
        
    </div>
)
}

export default Stands