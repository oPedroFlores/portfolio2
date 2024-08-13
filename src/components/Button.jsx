import React from "react";

const Button = ({ theFunction, text }) => {
  return (
    <button onClick={theFunction} className="defaultButton">
      {text}
    </button>
  );
};

export default Button;
