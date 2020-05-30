import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Form from "./components/Form";

const App = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, [props]);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
      <Form />
    </div>
  );
};

export default connect(null, actions)(App);
