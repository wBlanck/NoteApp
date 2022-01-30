import React, { useContext } from "react";
import { BsFillTrashFill, BsFolderFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import AppContext from "../context/AppContext";

function Note() {
  const { setModalContent } = useContext(AppContext);

  const changeFolder = () => {
    document.querySelector(".modal").classList.value =
      "modal slide-in changefolder";
    setModalContent("changefolder");
  };
  const editNote = () => {
    document.querySelector(".modal").classList.value = "modal slide-in edit";
    setModalContent("edit");
  };
  const deleteNote = () => {
    document.querySelector(".modal").classList.value = "modal slide-in delete";
    setModalContent("delete");
  };

  return (
    <div className="note">
      Note
      <BsFolderFill className="icon-folder" onClick={changeFolder} />
      <AiOutlineEdit className="icon-edit" onClick={editNote} />
      <BsFillTrashFill className="icon-trash" onClick={deleteNote} />
    </div>
  );
}

export default Note;
