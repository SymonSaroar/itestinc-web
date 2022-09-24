import React, { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { RiNumber0, RiNumber1, RiNumber2, 
  RiNumber3, RiNumber4, RiNumber5, RiNumber6, RiNumber7,
  RiNumber8, RiNumber9} from 'react-icons/ri'
import { CSSTransition } from 'react-transition-group'

const Slider = (props) => {
  const numbers = [
    <RiNumber1 />, <RiNumber2 />, <RiNumber3 />,
    <RiNumber4 />, <RiNumber5 />, <RiNumber6 />, <RiNumber7 />,
    <RiNumber8 />, <RiNumber9 />, <RiNumber0 />, 
  ]
  const [curSlide, changeSlide] = useState(0)
  const [slideDir, setSlideDir] = useState('right')
  const curSlideRef = useRef(curSlide)
  curSlideRef.current = curSlide
  const hoveringRef = useRef(false)
	const len = props.slides.length
  useEffect(() => {
    const timer = setInterval(() => {
      // console.log(props.classNames, hoveringRef.current, curSlideRef.current)
      !hoveringRef.current && 
        changeSlide((curSlideRef.current + 1) % 3)
      setSlideDir('right')
    }, 5000)
  
    return () => {
      clearInterval(timer)
    }   
  }, [])
  
  return (
    <div className='slider' onMouseEnter={() => {hoveringRef.current = true}} onMouseLeave={() => {hoveringRef.current = false}}>
      <div className="slide-img">
        {
          props.slides.map((slide, index) => {
            return(
              <CSSTransition in={curSlide === index}
                unmountOnExit
                timeout={500}
                classNames={`slide-img-${props.classNames}-${slideDir}`}
              >
                <div className='slide-img_img'
                style={{ backgroundImage: `url(${slide.image})` }}>
                </div>
              </CSSTransition>
            )
          })
        }
      </div>
      <div className='slide'>
        <div className='slide_left-container'
          onClick={() => {
            changeSlide(((curSlide - 1) + len) % len)
            setSlideDir('left')
          }}
        >
          <FaChevronLeft />
        </div>
        {
          props.slides.map((slide, index) => {
            return(  
              <CSSTransition in={curSlide === index}
                unmountOnExit
                timeout={{
                  appear: 500,
                  enter: 1200,
                  exit: 600,
                }}
                classNames={`slide_caption-${props.classNames}-${slideDir}`}
              >
                <div className="slide_caption-container">
                  <span className="slide_caption-title">
                    {slide.title}
                  </span>
                  <span className="slide_caption-subtitle">
                    {slide.subtitle}
                  </span>
                </div>
              </CSSTransition>
            )
          })
        }
        <div className='slide_right-container'
          onClick={() => {
            changeSlide((curSlide + 1) % 3)
            setSlideDir('right')
          }}
        >
          <FaChevronRight />
        </div>
        <div className="slide_indicator">
          {
            numbers.slice(0, len).map((number, i) => {
              return(
                <div className={`slide_indicator-number cur-${curSlide === i}`} key={i}
                  onClick={() => {
                    (i < curSlide)? setSlideDir('left') : setSlideDir('right')
                    changeSlide(i)
                  }}
                >
                  {number}
                </div>
              )
            })
          }
          
        </div>
      </div>
		</div>
  )
}

export default Slider