import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Features,
  Footer,
  Header,
  News,
  Services,
  Intro,
  Motto,
  ServiceListing,
} from "./containers";
import { Cta, Brand, Navbar, Feature } from "./components";
import { menuItems } from "./components/navbar/Menuitems";
import "./app.scss";

const App = () => {
  const Home = () => {
    return (
      <>
        <Intro />
        <Features>
          <Motto />
          <Feature index={0} />
          <Services />
          <Feature index={1} />
          <ServiceListing />
        </Features>
        <News />
      </>
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="gradient__bg fixed">
          <Header />
          <Navbar />
        </div>
        <Routes>
          {menuItems.map((menu, index) => {
            return (
              <>
                {menu.url === "/home" ? (
                  <>
                    <Route path="/" element={<Home />} key={index}/>
                    <Route path="/home" element={<Home />} key={index}/>
                    <Route path="/itestinc-web" element={<Home />} key={index}/>
                  </>
                ) : (
                  <Route path={menu.url} element={menu.object} key={index}/>
                )}
                {menu.submenu &&
                  menu.submenu.map((submenu, index) => {
                    return (
                      <Route path={submenu.url} element={submenu.object} key={index}/>
                    );
                  })}
              </>
            );
          })}
        </Routes>

        <Brand />
        <Footer>
          <Cta />
        </Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
