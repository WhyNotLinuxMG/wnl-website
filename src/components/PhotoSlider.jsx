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
    slidesToShow: 3,
    dots: true,
    speed: 500,
    autoplay: true,
    afterChange: (current, next) => {
      setIsCenter(next === 1);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          marginTop: "12px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          display: "inline-block",
          margin: "0 5px",
          backgroundColor: "gray",
          marginBottom: "10px",
        }}
        className="custom-dot"
      />
    ),
  };

  return (
    <div className="mt-5">
      <div className="slider-container overflow-hidden">
        <Slider {...settings} className="pb-4">
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
