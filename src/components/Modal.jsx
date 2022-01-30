import React from "react";
import Button from "./Button";
import Folders from "./Folders";

import Note from "./Note";

function Modal({ modalContent }) {
  let content;

  switch (modalContent) {
    case "search":
      content = (
        <>
          <Note />
          <Note />
          <Note />
          <Note />
        </>
      );
      break;
    case "changefolder":
      content = (
        <>
          <h2>Move Note to</h2>
          <Note />
          <Folders />
          <Button>Move Note</Button>
        </>
      );
      break;

    default:
      content = <h1>hehe</h1>;
  }

  return <div className="modal">{content}</div>;
}

export default Modal;
