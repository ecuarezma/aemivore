import React from "react";
import classes from "./Slider.module.scss";

const Slider = (props) => {
  return (
    <div className={`${classes.Slider} ${props.active && classes.active}`}>
      <ul>
        <li>
          <a href="/api/logout">logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
