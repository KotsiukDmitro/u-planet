import React from "react";

export function Arrow({ direction, className, onClick }) {
  return (
    <div
      role='presentation'
      aria-label={direction === 'next' ? 'Next Slide' : 'Previous Slide'}
      className={`${className} block absolute z-10 top-[45.5%] cursor-pointer ${direction === 'next' ? 'right-0' : 'left-0'}`}
      onClick={onClick}
    />
  )
}


export const NextArrow = (props) => <Arrow direction='next' {...props} />
export const PrevArrow = (props) => <Arrow direction='prev' {...props} />
