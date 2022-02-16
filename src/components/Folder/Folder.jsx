import "./Folder.scss";
import { AiFillFolder } from "react-icons/ai";

function Folder({ children }) {
  return (
    <div className={`folder`}>
      <AiFillFolder style={{ color: "#e0a743" }} />
      <span className="title">{children}</span>
    </div>
  );
}

export default Folder;
