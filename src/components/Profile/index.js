import React from "react";
import { useToggle } from "../hooks/useToggle";
import Slider from "../Slider";
import classes from "./Profile.module.scss";

const Profile = (props) => {
  const [isActive, toggle] = useToggle(false);
  return (
    <>
      <div className={classes.Profile}>
        <p>{props.name}</p>
        <img src={props.image} alt="user profile" onClick={toggle} />
      </div>
      <Slider active={isActive} />
    </>
  );
};

export default Profile;
