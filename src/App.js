import React from "react";
import "./App.css";
import video from "./media/mirror-hand.mov";
import horse from "./media/horse_cropped.mov";
// import aki from "./media/horse/aki/aki_full.mov";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <main>
        <h1 id="header-name">
          AEMI K<span>A</span>TO
        </h1>
      </main>
      <video playsInline autoPlay muted loop id="splash-vid">
        <source src={video} type="video/mp4" />
      </video>
      <video playsInline autoPlay muted loop id="horse-bg">
        <source src={horse} type="video/mp4" />
      </video>
      <footer>
        <a href="mailto:aemivore@gmail.com" className="icon-email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.instagram.com/aemivore/"
          target="noopener"
          className="icon-insta"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </footer>
      {/* <video playsInline autoPlay muted id="aki">
        <source src={aki} type="video/mp4" />
      </video> */}
    </div>
  );
}

export default App;
