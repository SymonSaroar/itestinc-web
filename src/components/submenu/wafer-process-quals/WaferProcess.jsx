import React from "react";
import "./waferprocess.scss";
import "../menu.scss";
import bg from "../../../assets/menubg/waferprocess.png";
import { menuItems } from "../../navbar/Menuitems";
import { Link } from "react-router-dom";

const WaferProcess = (props) => {
  let thisMenu = props.submenu
    ? menuItems[props.menu].submenu[props.submenu - 1]
    : menuItems[props.menu];

  return (
    <div className="wafer-process submenu">
      <div
        className="wafer-process_title title"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="wafer-process_title-overlay title-background-overlay">
          <section>{thisMenu.title}</section>
        </div>
      </div>
      <div className="wafer-process_info info">
        {menuItems[props.menu].submenu && (
          <div className="wafer-process_info-navigation info-navigation">
            <ul>
              {menuItems[props.menu].submenu.map((submenu, index) => {
                return (
                  // thisMenu.title !== submenu.title &&
                  <li
                    key={index}
                    className={thisMenu.title === submenu.title ? "active" : ""}
                  >
                    <Link to={submenu.url}>{submenu.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className="wafer-process_info-details menu-info-details info-details">
          {thisMenu.details}
          {thisMenu.image && (
            <img src={thisMenu.image} alt={thisMenu.title} loading="lazy" />
          )}
        </div>
      </div>
    </div>
  );
};

export default WaferProcess;
