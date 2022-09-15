import React from "react";
import "./App.css";

import horse from "./media/horse.MOV";

function App() {
  return (
    <div className="App">
      <h1 id="title">
        AEMI K<span>A</span>TO
      </h1>

      <div className="video">
        <video playsInline autoPlay muted loop id="splash-vid">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <video playsInline autoPlay muted loop id="horse-bg">
        <source src={horse} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
