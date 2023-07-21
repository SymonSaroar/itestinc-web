import React from "react";
import "./motto.scss";

const Motto = () => {
  return (
    <div className="motto-container">
      <h1 className="motto-container_welcome"> Welcome to iTest Inc. </h1>
      <div className="motto-container_motto">
        <h3 className="motto-container_motto-text first-line">
          In a world of me, we are the{" "}
          <span className="motto-text_itest">I Test</span>
        </h3>
        <h3 className="motto-container_motto-text second-line">
          Taking you ahead
        </h3>
        <p className="motto-container_about">
          We are the discerning I, the test lab of the future, established with
          a staunch purpose to build upon the cutting edge, leading edge ATE
          test development, load board development capability and provide the
          secondary extension of electrical test which is to validate a new
          product, a new process, or a new package.
        </p>
      </div>
    </div>
  );
};

export default Motto;
