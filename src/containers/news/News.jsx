import React from 'react'
import './news.scss'
import Ceritification from './Ceritification'
import PressReleases from './PressReleases'
import RecentEvents from './RecentEvents'

const News = (props) => {
  return (
    <div className='news'>
      <div className='news_certification'>
        <Ceritification />
      </div>
      <div className='news_recent'>
        <RecentEvents />
      </div>
      <div className='news_press'>
        <PressReleases />
      </div>
      
    </div>
  )
}

export default News