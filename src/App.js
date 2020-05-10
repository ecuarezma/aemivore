import React, { Component } from "react";
import axios from "axios";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  componentDidMount() {
    axios.get("/user").then((res) => this.setState({ user: res.data.name }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default App;
