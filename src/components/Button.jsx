import React from "react";

function Button({ children, handleClick, className }) {
  return (
    <button className={`btn`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
