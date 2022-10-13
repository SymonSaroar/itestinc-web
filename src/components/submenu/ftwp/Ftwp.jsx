import React from "react";
import "./ftwp.scss";
import "../submenu.scss";
import bg from "../../../assets/submenu-background.jpg";
import { menuItems } from "../../navbar/Menuitems";
import { Link } from "react-router-dom";

const Ftwp = (props) => {
  let thisMenu = props.submenu
    ? menuItems[props.menu].submenu[props.submenu - 1]
    : menuItems[props.menu];
  return (
    <div className="final-test-wafer-probe ftwp submenu">
      <div
        className="ftwp_title title"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="ftwp_title-overlay title-background-overlay">
          <section>{thisMenu.title}</section>
        </div>
      </div>
      <div className="ftwp_info info">
        <div className="ftwp_info-navigation info-navigation">
          <ul>
            {menuItems[props.menu].submenu.map((submenu, index) => {
              return (
                thisMenu.title !== submenu.title && (
                  <li key={index}>
                    <Link to={submenu.url}>{submenu.title}</Link>
                  </li>
                )
              );
            })}
          </ul>
        </div>
        <div className="ftwp_info-details info-details">
          {thisMenu.details}
          {thisMenu.image && <img src={thisMenu.image} alt={thisMenu.title} />}
        </div>
      </div>
    </div>
  );
};

export default Ftwp;
