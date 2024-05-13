import React from 'react'
// import Swiper core and required modules
import {  Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const NewS = () => {
  return (
    <div>
       <Swiper
      // install Swiper modules
      modules={[ Pagination,A11y]}
      spaceBetween={50}
      slidesPerView={3}
      
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
      <SwiperSlide>Slide 1</SwiperSlide>
      
      ...
    </Swiper>
    </div>
  )
}

export default NewS