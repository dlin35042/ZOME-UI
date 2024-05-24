import React from "react";

function GradientBtn(props) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`gradient-btn text-base sm:text-xl rounded-full ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default GradientBtn;
