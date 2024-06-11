import Slider from "react-slick";
import { photo } from "../utils";
import { useState } from "react";

const PhotoSlider = () => {
  const [isCenter, setIsCenter] = useState(true);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    variableWith: true,
    dots: true,
    // speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    autoplay: true,
    // afterChange: (current, next) => {
    //   setIsCenter(next === 1);
    // },
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
        }}
      >
        <ul className="p-2 flex justify-center m-0 items-center gap-x-3">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <li
        style={{
          width: "10px",
          height: "10px",
        }}
        className="rounded-full bg-gray-400 inline-block hover:bg-yellow"
      ></li>
    ),
  };

  return (
    <div className="mt-2">
      <div className="slider-container overflow-hidden py-5">
        <Slider {...settings} dotsClass="custom-dot">
          {photo.map((item) => (
            <div key={item.id} className="pl-5">
              <img
                className="w-[800px]"
                src={item.img}
                alt={item.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PhotoSlider;
