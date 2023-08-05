import React from "react";

const Reset = ({ onHandleReset }) => {
  return (
    <div>
      <button onClick={onHandleReset}>Clear</button>
    </div>
  );
};

export default Reset;
