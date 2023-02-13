import React, { useState, useEffect } from "react";

import goodbyeAnimation from "../assets/goodbye.mp4";
import wellMusic from "../assets/Well.mp3";

import * as style from "./goodbye.module.scss";

const Goodbye = () => {
  const [audio, setAudio] = useState(null);
  useEffect(() => {
    setAudio(new Audio(wellMusic));
  }, []);

  const playAudio = () => {
    audio.play();
    audio.loop = true;
  };
  return (
    <div className={style.container}>
      <video
        playsInline
        autoPlay
        muted
        loop
        className={style.animation}
        onClick={playAudio}
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
