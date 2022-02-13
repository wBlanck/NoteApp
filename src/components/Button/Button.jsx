import "./Button.scss";
import { AiOutlinePlus } from "react-icons/ai";

function Button({ content, type, handleClick }) {
  return (
    <button
      className={`btn ${type}`}
      onClick={() => handleClick && handleClick(content)}>
      <AiOutlinePlus />
    </button>
  );
}

export default Button;
