// components/Button.js

import React from "react";
import "./Button.css";

function Button({ buttonText, type, className, clickHandler }) {
  return (
    <>
      <Button
        buttonText={buttonText}
        className={className}
        clickHandler={clickHandler}
        type={type}
      />
    </>
  );
}

export default Button;
