import React from "react";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.home}>
        <p>HOME</p>
      </div>
      <div className={classes.login}>
        <p>Sign up</p>
        <p>Sign in</p>
      </div>
    </nav>
  );
};

export default Navbar;
