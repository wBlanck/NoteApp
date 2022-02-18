import "./Button.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";

function Button({ content, type, handleClick }) {
  return (
    <>
      {type === "close" ? (
        <button type="button" className={`btn ${type}`} onClick={handleClick}>
          <AiOutlinePlus />
        </button>
      ) : (
        <button
          className={`btn ${type}`}
          onClick={() => handleClick && handleClick(content)}>
          {type === "add" && <AiOutlinePlus />}
          {type === "update" && <BiRefresh />}
        </button>
      )}
    </>
  );
}

export default Button;
