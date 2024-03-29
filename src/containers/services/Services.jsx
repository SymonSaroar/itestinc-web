import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";
import "./services.css";
import { ServiceList } from "./ServiceList";
import { HiWifi, HiChip, HiCog } from "react-icons/hi";

const Services = () => {
  const [showStatus, changeStatus] = useState(
    Array(ServiceList.length).fill(false)
  );
  const change = (index) => {
    let newStatus = [...showStatus];
    newStatus[index] = !newStatus[index];
    changeStatus(newStatus);
  };
  const IconList = [<HiWifi />, <HiChip />, <HiCog />];

  return (
    <div className="services">
      <div className="services_container">
        {ServiceList.map((service, index) => {
          return (
            <div className="service" key={index}>
              <InView threshold={1}>
                {({ inView, ref, entry }) => (
                  <div
                    className={`${"service_logo"} ${
                      inView ? "service_logo-show" : "service_logo-hide"
                    } ${"delay-"}${index}`}
                    ref={ref}
                  >
                    {IconList[index]}
                  </div>
                )}
              </InView>

              <div className="service_info">
                <div className="service_info-title">{service.title}</div>
                <div className="service_info-subtitle">{service.subtitle}</div>

                <CSSTransition
                  in={showStatus[index]}
                  timeout={500}
                  classNames="service_info-hidden-anim"
                  unmountOnExit
                >
                  <div className="service_info-hidden">{service.info}</div>
                </CSSTransition>
                {service.info && (
                  <div
                    className="service_info-show"
                    onClick={() => change(index)}
                  >
                    {showStatus[index] ? "Show less" : "Show more"}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
