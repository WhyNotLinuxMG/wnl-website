import React from 'react';

const GameStands = ({ game, about }) => {
  return (
    <div className='w-full'>
      <h4 className='font-DMMono text-white capitalize mb-3 mt-5 font-semibold'>{game}</h4>
      <p className='font-DMMono text-white text-[14px] md:text-[15px] font-extralight w-full '>
        {about}
      </p>
      <div className='w-full h-[1px] mt-5 bg-raven'></div>
    </div>
  );
};

export default GameStands;