import React from 'react'
import './footer.scss'
import { FaRegCopyright } from 'react-icons/fa'

const Footer = (props) => {
  return (
    <div className='footer'>
      {props.children}
      <div className="footer-copyright">
        <FaRegCopyright /> CopyRight 2022 itestinc. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer