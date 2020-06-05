import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import classes from "./Form.module.scss";

const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post("/api/blog", this.state);
    //must update blogpost state through redux
  };

  const handleChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value });
    props.fetchForm(e);
  };

  return (
    <form onSubmit={handleSubmit} method="POST" className={classes.Form}>
      <div className={classes.Form}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={props.form.title}
          required
          onChange={handleChange}
        />

        <label htmlFor="image">Image URL: </label>
        <input type="file" name="image" id="image" />

        <label htmlFor="body">Body: </label>
        <textarea
          type="text"
          name="body"
          id="body"
          value={props.form.body}
          required
          onChange={handleChange}
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
