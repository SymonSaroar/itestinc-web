import React from "react";
import "./servicelisting.scss";
import { servicelistentries } from "./ServiceListEntries";

const ServiceListing = () => {
  return (
    <div className="servicelisting-container">
      <h2>Our Services</h2>
      <ul>
        {servicelistentries.map((entry, index) => {
          return (
            <li style={{ backgroundImage: `url(${entry.image})` }}>
              <span>{entry.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServiceListing;
