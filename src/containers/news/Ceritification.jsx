import React from 'react'
import './certification.scss'
import { certificates } from './Certificates'
import { Slider } from '../../components'

const Ceritification = (props) => {
  return (
    <div className='certification'>
      <span className='certification_title'>certification</span>
      <Slider slides={certificates} classNames='cert-anim'/>
    </div>
  )
}

export default Ceritification