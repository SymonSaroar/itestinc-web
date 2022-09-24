import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './certification.scss'
import { certificates } from './Certificates'
import { Slider } from '../../components'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Ceritification = (props) => {
  return (
    <div className='certification'>
      <Slider slides={certificates} />
    </div>
  )
}

export default Ceritification