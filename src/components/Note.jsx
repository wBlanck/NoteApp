import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

function Note() {
  return (
    <div className="note">
      Note
      <AiOutlineEdit className="icon-edit" />
      <BsFillTrashFill className="icon-trash" />
    </div>
  );
}

export default Note;
