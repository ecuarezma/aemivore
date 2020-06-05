import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import BlogPost from "./BlogPost";

const Content = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

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
