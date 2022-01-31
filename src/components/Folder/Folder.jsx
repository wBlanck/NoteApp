import "./Folder.scss";
import { AiFillFolder } from "react-icons/ai";

function Folder() {
  return (
    <div className="folder">
      <AiFillFolder className="icon" />
      <span className="title">Study</span>
    </div>
  );
}

export default Folder;
