import "./Button.scss";

function Button({ children, handleClick, type }) {
  const closeModal = () => {
    document.querySelector(".app-container").classList.remove("slide-out");
    document.querySelector(".modal").classList.value = "modal";
    console.log("close");
  };

  return (
    <button
      className={`btn ${type}`}
      onClick={type === "close" ? closeModal : handleClick}>
      {children}
    </button>
  );
}

export default Button;
