import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import BlogPost from "./BlogPost";

const Content = ({ blog, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (!blog) return <p>loading...</p>;
  else if (blog.length === 0) return <p>No posts yet...</p>;

  return (
    <div>
      {blog.map((post) => (
        <BlogPost {...post} key={post._id} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ blog }) => {
  return { blog };
};

export default connect(mapStateToProps, actions)(Content);
