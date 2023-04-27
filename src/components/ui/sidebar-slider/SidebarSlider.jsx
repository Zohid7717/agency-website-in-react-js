import React, {Component} from 'react';
import Slider from "react-slick";
import styles from './SidebarSlider.module.scss'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.sidebarslider__arrow}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.sidebarslider__arrow}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const SidebarSlider = ({children}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: function (currentSlide, nextSlide) {
      // console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      // console.log("after change", currentSlide);
    }
  }
  return (
    <div className={styles.slider_wrap}>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default SidebarSlider;
