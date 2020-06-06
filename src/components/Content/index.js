import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import BlogPost from "./BlogPost";

const Content = (props) => {
  const [state, setState] = useState(props.blog);

  useEffect(() => {
    props.fetchPosts();
  }, []);

  useEffect(() => {
    setState(props.blog);
    console.log("From content component", props.blog, state);
  }, [props.blog, state]);

  if (!props.blog) {
    return <p>loading...</p>;
  }
  return (
    <div>
      {props.blog.map((post) => (
        <BlogPost {...post} key={post._id} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ blog }) => {
  return { blog };
};

export default connect(mapStateToProps, actions)(Content);
