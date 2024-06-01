import React from 'react'
import { contributors } from '../utils'
import Slider from "react-slick";

function Contributor() {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            }
        ]
    };
    return (
        <>
            <div className='slider-container pb-20'>
                <Slider {...settings}>
                    {
                        contributors.map((contributor, index) => (
                            <Contributor_card key={index} {...contributor} />
                        ))
                    }
                </Slider>

            </div>

        </>

    )
}

export default Contributor

function Contributor_card({ nom, fonction, image }) {
    return (
        <>
            {/* <div className='relative mx-3'>
                <img src={image} alt="" className=' rounded-3xl top-0 left-0' />
                <div className=' bottom-3 left-2 absolute bg-red-500 w-full '>
                    <div className=' font-DMMono text-slate-200 text-lg'>{nom}</div>
                    <div className='font-DMMono text-[#3f3f3fd4] text-lg'>{fonction}</div>
                </div>
            </div > */}

            <div className='contrib-container relative mx-3'>

                <img src={image} className="h-[424px] w-[282px]" />


                <svg class="flt_svg" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="flt_tag">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                            <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                        </filter>
                    </defs>
                </svg>

            </div>
            {/* <div className='contrib-container  relative mx-3'>
            </div> */}
        </>
    )
}



