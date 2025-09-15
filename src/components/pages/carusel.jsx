import React, { Component, useRef, useState } from "react";
import Slider from "react-slick";
import ImgOne from "../../assets/CaruselImage.svg";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="absolute z-50 mt-155 right-40">
      <KeyboardArrowLeftIcon style={{ color: "white" }} fontSize="large" />
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="absolute z-50 -mt-24 right-25">
      <KeyboardArrowRightIcon style={{ color: "white" }} fontSize="large" />
    </div>
  );
}

const CaruselComp = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  let sliderRef = useRef(null);

  let SlideNumber = slideIndex + 1;

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <div className="my-20 z-0">
      <div className="MYContainer">
        <div className="slider-container">
          <div className="flex flex-col gap-4 absolute top-156 z-20 right-25">
            <h1 className="text-white text-2xl font-light z-30">
              {SlideNumber} / 3
            </h1>
            <input
              type="range"
              min={0}
              max={2}
              value={slideIndex}
              onChange={(e) => {
                const index = Number(e.target.value);
                sliderRef.current.slickGoTo(index);
                setSlideIndex(index);
              }}
              className="carousel-range"
              style={{
                background: `linear-gradient(to right, white ${
                  ((slideIndex + 1) / 3) * 100
                }%, #888 ${((slideIndex + 1) / 3) * 100}%)`,
              }}
            />
          </div>
          <h1 className="absolute z-10  text-4xl text-white font-medium left-15 top-15">
            PINKO
          </h1>
          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef = slider;
            }}
          >
            <div>
              <img src={ImgOne} alt="ImgOne" className="w-[1440px]" />
            </div>
            <div>
              <img src={ImgOne} alt="ImgOne" className="w-[1440px]" />
            </div>
            <div>
              <img src={ImgOne} alt="ImgOne" className="w-[1440px]" />
            </div>
          </Slider>
          <div className="flex flex-col gap-15 absolute top-95 left-15">
            <div>
              <h1 className="text-7xl font-medium text-white">
                Premium sale
              </h1>
              <h1 className="text-7xl font-medium text-white">-50%</h1>
            </div>
            <button className="w-60 bg-[#F54F1F] px-5 py-3 text-2xl text-white font-medium rounded-4xl cursor-pointer hover:bg-amber-600">
              Premium shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaruselComp;
