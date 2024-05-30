import React from 'react';
import CountUp from 'react-countup';

const StatsDetail = ({ number, text }) => {
  return (
    <div className='text-white text-center m-2'>
      <h3 className='font-kontes text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px]'>
        <CountUp end={number} duration={4} /><span className='font-sans'>+</span>
      </h3>
      <p className='w-full sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px]'>{text}</p>
    </div>
  );
}

export default StatsDetail;
