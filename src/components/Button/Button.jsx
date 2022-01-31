import "./Button.scss";

function Button({ children, handleClick, className }) {
  return (
    <button className={`btn`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
