import React, { useState } from 'react'
import './slider.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Slider = ({ slides }) => {
  const [curSlide, changeSlide] = useState(0)
	const len = slides.length
  return (
    <div className='slider'>
			<div className='slide-img' 
			style={{ backgroundImage: `url(${slides[curSlide].image})` }}>
			</div>
			<div className='slide'>
				<div className='slide_left-container' 
				onClick={() => changeSlide(((curSlide - 1) + len) % len)}
				>
					<FaChevronLeft />
				</div>
				<div className="slide_caption-container">
					<span className="slide_caption-title">
						{slides[curSlide].title}
					</span>
					<span className="slide_caption-subtitle">
						{slides[curSlide].subtitle}
					</span>
				</div>
				<div className='slide_right-container'
				onClick={() => changeSlide((curSlide + 1) % 3)}
				>
					<FaChevronRight />
				</div>
			</div>
		</div>
  )
}

export default Slider