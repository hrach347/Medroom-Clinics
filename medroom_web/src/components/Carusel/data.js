import React from "react";
import styles from "./style.module.css";
import leftArrow from "../../Assets/Images/arrow1.png";
import rightArrow from "../../Assets/Images/arrow2.png";

const PrevArrow = ({ onClick }) => {
  return (
    <button alt="Previous" onClick={onClick}>
      <img src={rightArrow} alt="" />
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button alt="Next" onClick={onClick}>
      <img src={leftArrow} alt="" />
    </button>
  );
};

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        // slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        // slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};
