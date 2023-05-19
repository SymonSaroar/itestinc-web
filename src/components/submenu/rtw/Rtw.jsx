import React from "react";
import "./rtw.scss";
import "../submenu.scss";
import bg from "../../../assets/submenu-background.jpg";
import { menuItems } from "../../navbar/Menuitems";
import { Link } from "react-router-dom";

const Rtw = (props) => {
  let thisMenu = props.submenu
    ? menuItems[props.menu].submenu[props.submenu - 1]
    : menuItems[props.menu];

  return (
    <div className="real-time-wip rtw submenu">
      <div
        className="rtw_title title"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="rtw_title-overlay title-background-overlay">
          <section>{thisMenu.title}</section>
        </div>
      </div>
      <div className="rtw_info info">
        <div className="rtw_info-navigation info-navigation">
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
        <div className="rtw_info-details info-details">
          {thisMenu.details}
          {thisMenu.image && (
            <img src={thisMenu.image} alt={thisMenu.title} loading="lazy" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Rtw;
