import "./Note.scss";
import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillFolder } from "react-icons/ai";
import { RiFileEditLine } from "react-icons/ri";

function Note({ id, title, deleteNote, editNote }) {
  /*   const changeFolder = () => {
    document.querySelector(".app-container").classList.add("slide-out");
    document.querySelector(".modal").classList.value = "modal slide-in";
    setModalContent("changefolder");
  };
  const editNote = () => {
    document.querySelector(".app-container").classList.add("slide-out");
    document.querySelector(".modal").classList.add("slide-in");
    setModalContent("edit");
  };
  const deleteNote = () => {
    document.querySelector(".modal").classList.value = "modal slide-in delete";
    setModalContent("delete");
  };
 */
  return (
    <div className="note">
      {title}
      <AiFillFolder className="icon-folder" />
      <RiFileEditLine className="icon-edit" onClick={() => editNote(id)} />
      <BsFillTrashFill className="icon-trash" onClick={() => deleteNote(id)} />
    </div>
  );
}

export default Note;
