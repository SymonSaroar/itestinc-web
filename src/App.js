import React from 'react'

import { Features, Footer, Header, News, Services, Intro } from './containers'
import { Cta, Brand, Navbar, Feature} from './components'
import './app.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg sticky'>
            <Header />
            <Navbar />
        </div>
        <Intro />
        <Features>
          <Feature index={0}/>
          <Services />
          <Feature index={1}/>
        </Features>
        <News />
        <Brand />
        <Cta />
        <Footer />
    </div>
  )
}

export default App