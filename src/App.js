import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

const App = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, [props]);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
};

export default connect(null, actions)(App);
