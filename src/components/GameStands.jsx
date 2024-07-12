import React from 'react';

const GameStands = ({ game, about }) => {
  return (
    <div className='w-full'>
      <h4 className='pb-3 text-bruning font-DMMono text-[18px] md:text-[22px]'>{game}</h4>
      <p className='font-DMMono text-white text-[14px] md:text-[15px] font-extralight w-full '>
        {about}
      </p>
      <div className='w-full h-[1px] mt-5 bg-raven'></div>
    </div>
  );
};

export default GameStands;