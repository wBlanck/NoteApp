import React from "react";
import { BsFolderFill } from "react-icons/bs";

function Folder() {
  return (
    <div className="folder">
      <BsFolderFill className="icon" />
      <span className="title">Study</span>
    </div>
  );
}

export default Folder;
