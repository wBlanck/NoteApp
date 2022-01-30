import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

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
          <Button>
            <AiOutlineCheck />
          </Button>
        </>
      );
      break;
    case "addnote":
      content = (
        <>
          <input type="text" placeholder="Title" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Notes..."></textarea>
        </>
      );
      break;
    case "addfolder":
      content = (
        <>
          <input
            type="text"
            placeholder="Folder name..."
            className="input-folder"
          />
        </>
      );
      break;
    case "edit":
      content = (
        <>
          <input type="text" placeholder="Title" />
          <textarea name="" id="" placeholder="Notes..."></textarea>
        </>
      );
      break;
    case "delete":
      content = (
        <>
          <h1>Delete Note?</h1>
          <div className="buttons">
            <Button>
              <AiOutlineCheck />
            </Button>
            <Button>
              <BsFillTrashFill className="icon-trash" />
            </Button>
          </div>
        </>
      );
      break;
    default:
      content = <h1>hehe</h1>;
  }

  return <div className={`modal`}>{content}</div>;
}

export default Modal;
