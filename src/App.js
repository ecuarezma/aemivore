import React, { Component } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default App;
