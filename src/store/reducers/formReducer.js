import { FETCH_FORM } from "../actions/types";

const initialState = {
  title: "",
  body: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_FORM:
      return {
        ...state,
        [action.event.name]: action.event.value,
      };
    default:
      return state;
  }
}
