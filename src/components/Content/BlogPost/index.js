import React from "react";

const BlogPost = (props) => {
  return (
    <article>
      <header>
        <h1>{props.title}</h1>
      </header>
      <span>{props.date}</span>
      <div>
        <img src={props.image} alt={props.title} width="100%" />
      </div>
      <p>{props.article}</p>
    </article>
  );
};

export default BlogPost;
