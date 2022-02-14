import "./Folder.scss";
import { AiFillFolder } from "react-icons/ai";

function Folder({ children, color, handleClick }) {
  const openFolder = () => {
    document.querySelector(".app-container").classList.add("slide-out");
    document.querySelector(".modal").classList.value = "modal slide-in";
  };

  return (
    <div className={`folder`}>
      <AiFillFolder style={{ color: "#e0a743" }} />
      <span className="title">{children}</span>
    </div>
  );
}

export default Folder;
