import React from 'react'
import './header.css'
import { MdCall, MdMail } from 'react-icons/md'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-container">
        <div className="contacts">
          <span>
            <MdCall />
            408-477-3900
          </span>
          <a href="mailto:sales@itestinc.com">
            <MdMail />
            sales@itestinc.com
          </a>
        </div>
        <div className="contacts-link">
          <a href="#contact-us">Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header