import "./Button.scss";
import { AiOutlinePlus } from "react-icons/ai";

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
      <AiOutlinePlus />
    </button>
  );
}

export default Button;
