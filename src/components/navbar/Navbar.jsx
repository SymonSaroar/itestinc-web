import React, { useState } from 'react'
import { RiArrowDownSLine, RiMenuLine } from 'react-icons/ri'
import logo from '../../assets/logo-1.png'
import './navbar.css'
import { menuItems } from './Menuitems'


const Navbar = () => {
  const [scrollStatus, setScrollStatus] = useState(false)
  const [menubarVisible, setMenubarVisible] = useState(false)
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY
    scroll > 0? setScrollStatus(true) :
      setScrollStatus(false)
  })
  
  return (
    <div className={scrollStatus? "navbar shadow" : "navbar"}>
      <div className={scrollStatus? "navbar-links height-60": "navbar-links height-80"}>
        <div className="navbar-links_logo">
          <img src={logo} alt="itest-inc" />
        </div>
        <div className='navbar-links_menubar' onClick={() => setMenubarVisible(!menubarVisible)}>
          <RiMenuLine />
        </div>
        <div className={`navbar-links_container scroll-${scrollStatus} menu-${menubarVisible}`}>
          <ul>
            {
              menuItems.map((menu, index) => {
                return (
                  <li key={index}>
                    <a href={menu.url}>
                      {menu.title}
                    </a>
                    {
                      menu.submenu &&
                      <RiArrowDownSLine className='navbar-fontlogo' />
                    }
                    {
                      menu.submenu &&
                      <div className={`navbar-links_container_dropdown scroll-${scrollStatus}`}>
                        {
                          menu.submenu.map((submenu, index) => {
                            return (
                              <a href={submenu.url} key={index}>
                                {submenu.title}
                              </a>  
                            )
                          })
                        }  
                      </div>
                    }
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar