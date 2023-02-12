import React from "react";
import useSound from "use-sound";

import goodbyeAnimation from "../assets/goodbye.mp4";
import wellMusic from "../assets/Well.mp3";

import * as style from "./goodbye.module.scss";

const Goodbye = () => {
  const [play] = useSound(wellMusic);
  return (
    <div className={style.container}>
      <video
        playsInline
        autoPlay
        muted
        loop
        className={style.animation}
        onClick={play}
      >
        <source src={goodbyeAnimation} type="video/mp4" />
      </video>
      <div className={style.message}>
        <p>Thank you, sweet friends.</p>
      </div>
    </div>
  );
};

export default Goodbye;
