import React from "react";

function Button({ children, handleClick, className }) {
  return (
    <button className={`btn ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
