import "./Button.scss";

function Button({ children, handleClick, type }) {
  return (
    <button className={`btn ${type}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
