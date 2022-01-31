import "./Note.scss";
import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillFolder } from "react-icons/ai";
import { RiFileEditLine } from "react-icons/ri";
import AppContext from "../../context/AppContext";

function Note() {
  const { setModalContent } = useContext(AppContext);

  const changeFolder = () => {
    document.querySelector(".modal").classList.value =
      "modal slide-in changefolder";
    setModalContent("changefolder");
  };
  const editNote = () => {
    document.querySelector(".app-container").classList.add("slide-out");
    document.querySelector(".modal").classList.value = "modal slide-in";
    setModalContent("edit");
  };
  const deleteNote = () => {
    document.querySelector(".modal").classList.value = "modal slide-in delete";
    setModalContent("delete");
  };

  return (
    <div className="note">
      Note
      <AiFillFolder className="icon-folder" onClick={changeFolder} />
      <RiFileEditLine className="icon-edit" onClick={editNote} />
      <BsFillTrashFill className="icon-trash" onClick={deleteNote} />
    </div>
  );
}

export default Note;
