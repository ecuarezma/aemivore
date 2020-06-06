import axios from "axios";
import { FETCH_USER, FETCH_POSTS, FETCH_FORM, CREATE_POST } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPosts = () => async (dispatch) => {
  const posts = await axios.get("/api/blog");
  dispatch({
    type: FETCH_POSTS,
    payload: posts.data,
  });
};

export const fetchForm = (event) => (dispatch) =>
  dispatch({ type: FETCH_FORM, event: event.target });

export const createPost = ({ form }) => async (dispatch) => {
  const { title, body } = form;
  const newPost = {
    title,
    body,
    date: new Date(),
  };
  await axios.post("/api/blog", newPost);
  dispatch({
    type: CREATE_POST,
  });
};

// d.toLocaleDateString()
// "6/5/2020"
// d.toLocaleString()
// "6/5/2020, 10:42:46 PM"
// d.toLocaleTimeString()
// "10:42:46 PM"
// d.toDateString()
// "Fri Jun 05 2020"
