import React from 'react'
import './feature.css'
import { FeatureList } from './FeatureList'

const Feature = (props) => {
  return (
    <div className='feature'>
      <span className='feature_title'>
        {FeatureList[props.index].title}
      </span>
      <span className="feature_subtitle">
        {FeatureList[props.index].subtitle}
      </span>
    </div>
  )
}

export default Feature