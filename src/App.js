import React from "react";
import "./App.css";
import video from "./media/mirror.MOV";
import horse from "./media/horse.MOV";

function App() {
  return (
    <div className="App">
      <h1 id="title">
        AEMI
        <br />
        KATO-CUAREZMA
      </h1>
      <div className="video">
        <video playsInline autoPlay muted loop id="bgvid">
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
