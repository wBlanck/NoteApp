import "./Folders.scss";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../Button/Button";
import Folder from "../Folder/Folder";

function Folders() {
  return (
    <div className="folders">
      {/* Click to add a folder */}
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <Button type="add">
        <AiOutlinePlus />
      </Button>
    </div>
  );
}

export default Folders;
