// components/Button.js

import React from "react";
import "./Button.css";

function Button({ children, className, onClick }) {
  return (
    <>
      <button className={`${className}`} onClick={onClick} id="button">
        {children}
      </button>
    </>
  );
}

export default Button;
