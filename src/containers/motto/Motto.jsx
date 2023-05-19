import React from "react";
import "./motto.scss";

const Motto = () => {
  return (
    <div className="motto-container">
      <h1 className="motto-container_welcome"> Welcome to iTest Inc. </h1>
      <div className="motto-container_motto">
        <h3 className="motto-container_motto-text first-line">
          In a world of me, we are the{" "}
          <span class="motto-text_itest">I Test</span>
        </h3>
        <h3 className="motto-container_motto-text second-line">
          Taking you ahead
        </h3>
      </div>
    </div>
  );
};

export default Motto;
