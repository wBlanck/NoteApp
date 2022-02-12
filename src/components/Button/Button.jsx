import "./Button.scss";
import { AiOutlinePlus } from "react-icons/ai";

function Button({ type }) {
  const toggleModal = () => {
    const appContainer = document.querySelector(".app-container");
    appContainer.classList.toggle("slide-out");
  };

  return (
    <button className={`btn ${type}`} onClick={toggleModal}>
      <AiOutlinePlus />
    </button>
  );
}

export default Button;
