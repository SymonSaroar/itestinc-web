import React from "react";
import "./pressreleases.scss";
import "../submenu.scss";
import bg from "../../../assets/submenu-background.jpg";
import { menuItems } from "../../navbar/Menuitems";
import { Link } from "react-router-dom";

const PressReleases = (props) => {
  let thisMenu = props.submenu
    ? menuItems[props.menu].submenu[props.submenu - 1]
    : menuItems[props.menu];

  return (
    <div className="press-releases-page submenu">
      <div
        className="press-releases-page_title title"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="press-releases-page_title-overlay title-background-overlay">
          <section>{thisMenu.title}</section>
        </div>
      </div>
      <div className="press-releases-page_info info">
        <div className="press-releases-page_info-navigation info-navigation">
          <ul>
            {menuItems[props.menu].submenu.map((submenu, index) => {
              return (
                // thisMenu.title !== submenu.title &&
                <li
                  key={index}
                  class={thisMenu.title === submenu.title ? "active" : ""}
                >
                  <Link to={submenu.url}>{submenu.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="press-releases-page_info-details info-details">
          {thisMenu.details}
          {thisMenu.image && <img src={thisMenu.image} alt={thisMenu.title} />}

          <div className="press-releases-page_info-card">
            <div>
              <a href="https://www.advantest.com/news?articleId=1956392">
                Advantest Article
              </a>
              <br />
              <a href="https://globenewswire.com/news-release/2018/02/21/1372338/0/en/Advantest-Receives-Supplier-Excellence-Award-for-Contributing-to-Start-Up-iTest-s-Success-During-its-First-Year.html">
                Globenewswire News Release
              </a>
            </div>
            <section>
              Advantest Receives Supplier Excellence Award for Contributing to
              Start-Up iTest's Success During its First Year
            </section>
          </div>

          <div className="press-releases-page_info-card">
            <div>
              <a href="https://www.linkedin.com/pulse/chroma-ate-inc-honored-itest-milpitas-california-11918-hauck/">
                Linked In post
              </a>
            </div>
            <section>
              CHROMA ATE Inc., Honored by iTest, Milpitas California- 1/19/18
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressReleases;
