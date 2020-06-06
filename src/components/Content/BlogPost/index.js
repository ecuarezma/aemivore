import React from "react";

const BlogPost = (props) => {
  const date = new Date(props.date);
  return (
    <article>
      <header>
        <h1>{props.title}</h1>
      </header>
      <span>{date.toDateString()}</span>
      {props.image && <img src={props.image} alt={props.title} width="100%" />}
      <p>{props.body}</p>
    </article>
  );
};

export default BlogPost;
