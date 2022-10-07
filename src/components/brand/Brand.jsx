import React from 'react'
import './brand.scss'

const Brand = () => {
  return (
    <div className='brand'>
      <div className="brand-address">
        <span className="brand-address_title">iTest, Inc. Headquarters</span> <br />
        1905 Tarob Ct. <br />
        Milpitas, CA 95035, USA <br />
        Phone: (408) 477-3900 (main) <br />
        Phone: (408) 418-1390 (alt) <br />
        <a href="mailto:sales@itestinc.com" className='brand-address_mail'>sales@itestinc.com</a>
      </div>
      <div className='brand-details'>
        <a href="#privacy">Privacy Policy</a> <br />
        <a href="sitemap">Sitemap</a>
      </div>
    </div>
  )
}

export default Brand