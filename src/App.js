import React from "react";
import "./App.css";
import video from "./media/mirror-hand.mov";
import horse from "./media/horse.MOV";
// import aki from "./media/horse/aki/aki_full.mov";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <h1 id="header-name">
        AEMI K<span>A</span>TO
      </h1>
      <video playsInline autoPlay muted loop id="splash-vid">
        <source src={video} type="video/mp4" />
      </video>
      <footer>
        <div className="icon-email">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="icon-insta">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </footer>
      <video playsInline autoPlay muted loop id="horse-bg">
        <source src={horse} type="video/mp4" />
      </video>
      {/* <video playsInline autoPlay muted id="aki">
        <source src={aki} type="video/mp4" />
      </video> */}
    </div>
  );
}

export default App;
