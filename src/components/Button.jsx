import React from 'react';

const Button = ({ theFunction, text }) => {
  return (
    <button onClick={theFunction} class="defaultButton">
      {text}
    </button>
  );
};

export default Button;
