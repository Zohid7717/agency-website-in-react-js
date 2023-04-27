import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import styles from './Carousel.module.scss'

const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div onClick={onClick} className={styles.carousel__arrow_left}>
      <IoIosArrowDropleft />
    </div>
  );
}

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div onClick={onClick} className={styles.carousel__arrow_right}>
      <IoIosArrowDropright />
    </div>
  );
}

const PauseOnHover = ({ children, slidesToShow }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
}

export default PauseOnHover;
