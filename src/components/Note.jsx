import React, { useContext } from "react";
import { BsFillTrashFill, BsFolderFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import AppContext from "../context/AppContext";

function Note() {
  const { setModalContent } = useContext(AppContext);
  const changeFolder = () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("slide-in");
    setModalContent("changefolder");
  };
  return (
    <div className="note">
      Note
      <BsFolderFill className="icon-folder" onClick={changeFolder} />
      <AiOutlineEdit className="icon-edit" />
      <BsFillTrashFill className="icon-trash" />
    </div>
  );
}

export default Note;
