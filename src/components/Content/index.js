import React, { useEffect, useState } from "react";
import axios from "axios";

import BlogPost from "./BlogPost";

const Content = () => {
  const [post, setPost] = useState("");
  useEffect(() => {
    async function getData() {
      await axios.get("/posts").then((res) => setPost(res.data));
    }
    getData();
  }, []);
  useEffect(() => console.log(post));

  return <BlogPost {...post} />;
};

export default Content;
