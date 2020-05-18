import React from "react";
import { connect } from "react-redux";

import Profile from "../Profile";
import classes from "./Navbar.module.scss";

const Navbar = ({ auth }) => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.home}>
        <p>HOME</p>
      </div>
      <div className={classes.user}>
        {auth && <Profile name={auth.firstName} image={auth.profileImage} />}
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Navbar);
