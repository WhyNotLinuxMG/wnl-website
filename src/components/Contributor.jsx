import React from "react";
import { contributors } from "../utils";
import Slider from "react-slick";

function Contributor() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    variableWidth: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false,
  };
  return (
    <>
      <div className="slider-container pb-20 w-[95%] m-auto">
        <Slider {...settings}>
          {contributors.map((contributor, index) => (
            <Contributor_card key={index} {...contributor} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Contributor;

function Contributor_card({ nom, fonction, image }) {
  return (
    <>
      <div className="contrib-container relative mx-3 h-[424px] w-[282px] ">
        <img src={image} className="w-full h-full object-cover   " />
        <div className="w-full h-1/4 bg-gradient-to-b from-[#25252506] via-[#000000d1] to-black  absolute bottom-0 px-4">
          <div className=" font-DMMono flex items-end text-slate-200 text-lg h-16">
            {nom}
          </div>
          <div className="font-DMMono text-[#8f8f8fd4] text-lg">{fonction}</div>
        </div>
        <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="flt_tag">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="flt_tag"
              />
              <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}
