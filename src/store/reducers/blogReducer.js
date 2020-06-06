import { FETCH_POSTS, CREATE_POST } from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("from reducer", action.payload);
      return action.payload;
    case CREATE_POST:
      return state;
    default:
      return state;
  }
}
