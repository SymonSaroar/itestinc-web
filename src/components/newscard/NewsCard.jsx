import React, { useState } from "react";
import "./newscard.scss";
import { FiPlusCircle, FiMinusCircle, FiExternalLink } from "react-icons/fi";
import { InView } from "react-intersection-observer";

const NewsCard = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <InView threshold={0.3}>
      {({ inView, ref }) => (
        <div className={`newscard newscard-show-${inView}`} ref={ref}>
          <div
            className="newscard_title-container"
            onClick={() => setShowInfo(!showInfo)}
          >
            <div className="newscard_title">{props.title}</div>
            <div className="newscard_title-container-logo">
              {showInfo ? <FiMinusCircle /> : <FiPlusCircle />}
            </div>
          </div>
          {props.info && (
            <div className={`newscard_info-container show-${showInfo}`}>
              <p className="newscard_info">{props.info}</p>
            </div>
          )}
          {props.links && (
            <div className={`newscard_links-container show-${showInfo}`}>
              {props.links.map((link, index) => {
                return (
                  <a href={link.url} key={index} className="newscard_link">
                    <FiExternalLink />
                    <span>{link.title}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      )}
    </InView>
  );
};

export default NewsCard;
