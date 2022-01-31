import "./Wrapper.scss";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../Button/Button";

function Wrapper({ className, children, handleClick }) {
  return (
    <div className={`wrapper ${className}`}>
      {children}
      <Button type="add" handleClick={handleClick}>
        <AiOutlinePlus />
      </Button>
    </div>
  );
}

export default Wrapper;
