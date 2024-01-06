import React from "react";

import river_stone from "assets/river-stone.mp4";

import * as style from "./goodbye.module.scss";

const RiverStone = () => {
  return (
    <div className={style.container} style={{ backgroundColor: "black" }}>
      <video playsInline controls loop className={style.animation}>
        <source src={river_stone} type="video/mp4" />
      </video>
    </div>
  );
};

export default RiverStone;
