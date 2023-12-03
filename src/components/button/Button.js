// components/Button.js

import React from "react";
import "./Button.css";

function Button({ buttonText, type, className, clickHandler }) {
  return (
    <button
      id="button"
      className={className}
      onClick={clickHandler}
      type={type}
    >
      {buttonText}
    </button>
  );
}

export default Button;
