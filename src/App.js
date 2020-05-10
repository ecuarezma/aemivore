import React, { Component } from "react";
import axios from "axios";

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
        <p>{this.state.user}</p>
      </div>
    );
  }
}

export default App;
