import React from 'react'
import './intro.css'
import { Slideitem } from './Slideitem'
import Slider from './Slider'
const Intro = () => {
  return (
    <div className='intro'>
      <Slider slides={Slideitem} />
    </div>
  )
}

export default Intro