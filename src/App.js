import React, { useEffect } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Content from "./components/Content";

const App = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, [props]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route
            exact
            path="/blog"
            render={() => (
              <div>
                <Link to="/blog/new">
                  <FontAwesomeIcon icon={faPlusCircle} />
                </Link>
                <Content />
              </div>
            )}
          />
          <Route
            exact
            path="/blog/new"
            render={(routerProps) => <Form {...routerProps} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default connect(null, actions)(App);
