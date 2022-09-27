import React from 'react'
import './pressreleases.scss'
import { presslist } from './PressList'
import { NewsCard } from '../../components'

const PressReleases = () => {
  return (
    <div className='press-releases'>
      <span className='press-releases_title'>Press Releases</span>
      {
        presslist.map((press, index) => {
          return(
            <NewsCard key={index} index={index} title={press.title} links={press.links} />
          )
        })
      }
    </div>
  )
}

export default PressReleases