import "./Note.scss";
import React, { useContext, useReducer } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillFolder } from "react-icons/ai";
import { RiFileEditLine } from "react-icons/ri";
import NoteContext from "../../noteapp/NoteContext";

function Note({ id, title }) {
  const { deleteNote, dispatch } = useContext(NoteContext);

  return (
    <div
      className="note"
      onClick={(e) => {
        if (e.target.classList.contains("note")) {
          dispatch({
            type: "NOTE_TO_EDIT",
            payload: id,
          });
          dispatch({ type: "SHOW_MODAL", payload: "editNote" });
        }
      }}>
      {title}
      <AiFillFolder className="icon-folder" />
      <RiFileEditLine
        className="icon-edit"
        onClick={() => {
          dispatch({
            type: "NOTE_TO_EDIT",
            payload: id,
          });

          dispatch({ type: "SHOW_MODAL", payload: "editNote" });
        }}
      />
      <BsFillTrashFill className="icon-trash" onClick={() => deleteNote(id)} />
    </div>
  );
}

export default Note;
