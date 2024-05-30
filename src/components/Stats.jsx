import React from 'react';
import Linux from "../assets/images/linux.png";
import Shape from "../assets/images/shape.png";
import { statistique } from '../utils';
import StatsDetail from './StatsDetail';

const Stats = () => {
  return (
    <div className='mt-8 relative hidden md:flex'>
      <img src={Shape} className='relative w-full' alt="" />
      <div className='absolute inset-0 flex flex-col md:flex-row items-center justify-center'>
        <img className='w-[120px] md:w-[200px] lg:w-[300px] xl:w-[416px] ml-4 mb-4 md:mb-0' src={Linux} alt="" />
        <div className='flex flex-wrap items-center justify-center ml-4'>
          {statistique.map((item) => (
            <StatsDetail key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;