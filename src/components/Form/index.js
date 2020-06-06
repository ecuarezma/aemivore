import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import classes from "./Form.module.scss";

const Form = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    props.createPost(props);
    setTimeout(() => props.history.push("/blog"), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.Form}>
      <div className={classes.Form}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={props.form.title}
          required
          onChange={(e) => props.fetchForm(e)}
        />

        <label htmlFor="image">Image: </label>
        <input type="file" name="image" id="image" />

        <label htmlFor="body">Body: </label>
        <textarea
          type="text"
          name="body"
          id="body"
          value={props.form.body}
          required
          onChange={(e) => props.fetchForm(e)}
        />
      </div>
      <div className={classes.Button}>
        <input type="submit" value="Post"></input>
      </div>
    </form>
  );
};

const mapStateToProps = ({ form }) => {
  return { form };
};

export default connect(mapStateToProps, actions)(Form);
