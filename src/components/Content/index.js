import React, { useEffect, useState } from "react";
import axios from "axios";

import BlogPost from "./BlogPost";

const Content = () => {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    async function getData() {
      await axios.get("/api/blog").then((res) => setPosts(res.data));
    }
    getData();
  }, []);
  useEffect(() => console.log(posts));

  if (!posts) {
    return <p>loading...</p>;
  }
  return (
    <div>
      {posts.map((post) => (
        <BlogPost {...post} key={post._id} />
      ))}
    </div>
  );
};

export default Content;
