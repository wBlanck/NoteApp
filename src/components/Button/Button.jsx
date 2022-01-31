import "./Button.scss";

function Button({ children, handleClick, type }) {
  const close = () => {
    document.querySelector(".app-container").classList.remove("slide-out");
    document.querySelector(".modal").classList.value = "modal";
  };
  return (
    <button
      className={`btn ${type}`}
      onClick={type === "close" ? close : handleClick}>
      {children}
    </button>
  );
}

export default Button;
