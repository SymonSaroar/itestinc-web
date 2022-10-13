import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Features, Footer, Header, News, Services, Intro } from './containers'
import { Cta, Brand, Navbar, Feature } from './components'
import { menuItems } from './components/navbar/Menuitems'
import './app.css'

const App = () => {
  
  const Home = () => {
    return (
      <>
        <Intro />
        <Features>
          <Feature index={0}/>
          <Services />
          <Feature index={1}/>
        </Features>
        <News />
      </>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="gradient__bg fixed">
          <Header />
          <Navbar />
        </div>
        <Routes>
          {
            menuItems.map((menu, index) => {
              return(
                <>
                  {
                    menu.url === "/home" 
                    ? <>
                        <Route path="/" element={<Home />}/>
                        <Route path="/home" element={<Home />} />
                        <Route path="/itestinc-web" element={<Home />} />
                      </>
                    : <Route path={menu.url} element={menu.object} />
                  }
                  {
                    menu.submenu && 
                    menu.submenu.map((submenu, index) => {
                      return(
                        <Route path={submenu.url} element={submenu.object} />
                      )
                    })
                  }
                </>
              )
            })
          }

          {/* <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/itestinc-web" element={<Home />} />

          <Route path="/test-program-development" element={<Tpd />} />
          <Route
            path="/test-interface-hardware-development"
            element={<Tihd />}
          />
          <Route
            path="/tester-time-with-technical-support"
            element={<Ttts />}
          />
          <Route path="/products-testers-capabilities" element={<Ptc />} />
          <Route path="/final-test-wafer-probe" element={<Ftwp />} />
          <Route path="/backend-services" element={<Bs />} />
          <Route path="/real-time-wip" element={<Rtw />} />
          <Route path="/drop-ship" element={<Ds />} /> */}
        </Routes>

        <Brand />
        <Footer>
          <Cta />
        </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App