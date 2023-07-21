import React from "react";
import { InView } from "react-intersection-observer";
import "./servicelisting.scss";
import { servicelistentries } from "./ServiceListEntries";

const ServiceListing = () => {
  return (
    <div className="servicelisting-container">
      <h2>Our Services</h2>
      <ul>
        {servicelistentries.map((entry, index) => {
          return (
            <li key={index} className="servicelisting-li">
              {/* <InView threshold={1}>
                {({ inView, ref, viewEntry }) => (
                  <>
                    <div
                      className={`${"servicelisting-item"} ${
                        inView
                          ? "servicelisting-item-show"
                          : "servicelisting-item-hide"
                      } ${"delay-"}${index % 3}`}
                      style={{ backgroundImage: `url(${entry.image})` }}
                      ref={ref}
                    >
                      <div>{entry.title}</div>
                    </div>
                  </>
                )}
              </InView> */}
              <div className="servicelisting-item-grid1">
                <div
                  className="servicelisting-item"
                  style={{ backgroundImage: `url(${entry.image})` }}
                ></div>
              </div>
              <div className="servicelisting-item-grid2">
                <div className="servicelisting-item-title">{`${entry.title}`}</div>
                <div className="servicelisting-item-details">
                  {entry.subtitle}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServiceListing;
