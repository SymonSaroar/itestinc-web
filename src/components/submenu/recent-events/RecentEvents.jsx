import React from "react";
import "./recentevents.scss";
import "../submenu.scss";
import bg from "../../../assets/submenu-background.jpg";
import { menuItems } from "../../navbar/Menuitems";
import { Link } from "react-router-dom";

const RecentEvents = (props) => {
  let thisMenu = props.submenu
    ? menuItems[props.menu].submenu[props.submenu - 1]
    : menuItems[props.menu];

  return (
    <div className="recent-events-page submenu">
      <div
        className="recent-events-page_title title"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="recent-events-page_title-overlay title-background-overlay">
          <section>{thisMenu.title}</section>
        </div>
      </div>
      <div className="recent-events-page_info info">
        <div className="recent-events-page_info-navigation info-navigation">
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
        <div className="recent-events-page_info-details info-details">
          {thisMenu.details}
          {thisMenu.image && (
            <img src={thisMenu.image} alt={thisMenu.title} loading="lazy" />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
