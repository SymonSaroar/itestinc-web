import React from 'react'
import './intro.scss'
import { Slideitem } from './Slideitem'
import { Slider } from '../../components'
const Intro = () => {
  return (
    <div className='intro'>
      <Slider slides={Slideitem} classNames='intro-anim'/>
    </div>
  )
}

export default Intro