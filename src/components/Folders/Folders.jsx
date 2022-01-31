import "./Folders.scss";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../Button/Button";
import Folder from "../Folder/Folder";
import AppContext from "../../context/AppContext";
import { useContext } from "react";

function Folders() {
  const { setModalContent } = useContext(AppContext);
  const addFolder = () => {
    document.querySelector(".modal").classList.value = "modal slide-in edit";
    document.querySelector(".app-container").classList.add("slide-out");

    setModalContent("openfolder");
  };
  return (
    <div className="folders">
      {/* Click to add a folder */}
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <Button type="add" handleClick={addFolder}>
        <AiOutlinePlus />
      </Button>
    </div>
  );
}

export default Folders;
