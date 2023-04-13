import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subract":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("unexpected Action");
  }
};

const Reducerfn = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const Add = () => {
    dispatch("add");
  };
  const Subract = () => {
    dispatch("subract");
  };

  const Reset = () => {
    dispatch("reset");
  };

  return (
    <div>
      <p> {count} </p>
      <button onClick={Add}>Add</button>
      <button onClick={Subract}>Subract</button>
      <button onClick={Reset}>reset</button>
    </div>
  );
};
export default Reducerfn;
