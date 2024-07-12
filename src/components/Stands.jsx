import React from 'react';
import { GameStand } from '../utils';
import GameStands from './GameStands';

const Stands = ({ image, number, name, about }) => {
  return (
    <div className='m-5'>
      <div className='flex items-center'>
        <div className='w-[22px] h-[1px] bg-white mr-1'></div>
        <p className='font-DMMono text-raven'>n°{number}</p>
      </div>
      <div className='mt-5 mb-7'>
        <img src={image} alt="" className='w-[84px]' />
      </div>
      <div className='mb-5'>
        <div className='w-full'>
          <h4 className='pb-3 text-bruning font-DMMono text-[18px] md:text-[22px]'>{name}</h4>
          <p className='font-DMMono text-white text-[14px] md:text-[15px] font-extralight w-full '>
            {about}
          </p>
          <div className='w-full h-[1px] mt-5 bg-raven'></div>
        </div>
      </div>
    </div>
  );
};

export default Stands;
