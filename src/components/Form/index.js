import React, { useState } from "react";
import axios from "axios";
import classes from "./Form.module.scss";

const Form = () => {
  const [title, setTitle] = useState("test title");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("test body");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/blog", { title, body });
    //must update blogpost state through redux
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      method="POST"
      className={classes.Form}
    >
      <div className={classes.Form}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" value={title} required />

        <label htmlFor="image">Image URL: </label>
        <input type="text" name="image" id="image" />

        <label htmlFor="body">Body: </label>
        <textarea type="text" name="body" id="body" value={body} required />
      </div>
      <div className={classes.Button}>
        <input type="submit" value="Post"></input>
      </div>
    </form>
  );
};

export default Form;
