import React from "react";
import classes from "./Profile.module.scss";

const Profile = (props) => {
  return (
    <div className={classes.Profile}>
      <p>{props.name}</p>
      <img src={props.image} alt="user profile" onClick="" />
    </div>
  );
};

export default Profile;
