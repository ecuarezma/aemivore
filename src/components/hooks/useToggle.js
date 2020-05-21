import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [state, setstate] = useState(initialState);
  const toggle = () => {
    setstate(!state);
  };
  return [state, toggle];
};
