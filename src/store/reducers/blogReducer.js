import { FETCH_POSTS } from "../actions/types";

export default function (state = null, action) {
  console.log("from blogReducer", state);
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
}
