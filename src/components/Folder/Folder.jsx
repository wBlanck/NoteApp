import "./Folder.scss";
import { AiFillFolder } from "react-icons/ai";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

function Folder() {
  const { setModalContent } = useContext(AppContext);
  const openFolder = () => {
    document.querySelector(".app-container").classList.add("slide-out");
    document.querySelector(".modal").classList.value = "modal slide-in";

    setModalContent();
  };
  return (
    <div className="folder" onClick={openFolder}>
      <AiFillFolder className="icon" />
      <span className="title">Study</span>
    </div>
  );
}

export default Folder;
