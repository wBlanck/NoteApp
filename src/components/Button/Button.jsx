import "./Button.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";

function Button({ content, type, handleClick }) {
  return (
    <button
      className={`btn ${type}`}
      onClick={() => handleClick && handleClick(content)}>
      {type === "close" && <AiOutlinePlus />}
      {type === "add" && <AiOutlinePlus />}

      {type === "update" && <BiRefresh />}
    </button>
  );
}

export default Button;
