import React from 'react'
import './cta.scss'
import { menuItems } from '../navbar/Menuitems'

const Cta = () => {
  return (
    <div className='cta'>
      <ul className="cta-list">
        {
          menuItems.map((menu, index) => {
            return (
              <li key={index}>
                <a href={menu.url}>{menu.title}</a>
              </li>
            )
          })
        }
        <li className='cta-list_join'>
          <a href="#join-us">Join Us</a>
        </li>
      </ul>
    </div>
  )
}

export default Cta