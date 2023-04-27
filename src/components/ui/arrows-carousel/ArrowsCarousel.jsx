import React from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io'


export const SamplePrevArrow = () => {
  return (
    <div onClick={onClick}>
      <IoIosArrowDropleft/>
    </div>
  );
}

export const SampleNextArrow = () => {
  return (
    <div onClick={onClick}>
      <IoIosArrowDropright />
    </div>
  );
}
