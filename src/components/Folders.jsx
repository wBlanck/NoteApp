import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "./Button";
import Folder from "./Folder";

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
      <Button>
        <AiOutlinePlus />
      </Button>
    </div>
  );
}

export default Folders;
