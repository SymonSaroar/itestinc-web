import React from 'react'
import './recentevents.scss'
import { eventlist } from './EventList'
import { NewsCard } from '../../components'

const RecentEvents = () => {
  return (
    <div className='recent-events'>
      <span className="recent-events_title">Recent Events</span>
      {
        eventlist.map((event, index) => {
          return(
            <NewsCard key={index} index={index} title={event.title} info={event.info} />
          )
        })
      }
    </div>
  )
}

export default RecentEvents