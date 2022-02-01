import "./Modal.scss";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillFolder } from "react-icons/ai";
import Button from "../Button/Button";
import Folders from "../Folders/Folders";
import Note from "../Note/Note";
import Input from "../Input/Input";
import Folder from "../Folder/Folder";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import Wrapper from "../Wrapper/Wrapper";

function Modal() {
  const { modalContent, setModalContent } = useContext(AppContext);
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
          <h1>Move Note</h1>
          <div className="wrapper bg text-center">
            <h2>Move Sleep to</h2>
            <Note />
            <Folders />

            <Button type="add">
              <AiOutlinePlus />
            </Button>
            <Button type="close">
              <AiOutlinePlus />
            </Button>
          </div>
        </>
      );
      break;
    case "addnote":
      content = (
        <>
          <h1>Add Note</h1>

          <Input type="text" placeholder="Title" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Notes..."></textarea>
          <Button type="add">
            <AiOutlinePlus />
          </Button>
          <Button type="close">
            <AiOutlinePlus />
          </Button>
        </>
      );
      break;
    case "addfolder":
      content = (
        <>
          <h1>Add Folder</h1>
          <div className="wrapper bg text-center">
            <h2>Folder Color</h2>
            <div className="folder-colors">
              <AiFillFolder className="green" />
              <AiFillFolder className="blue" />
              <AiFillFolder className="pink" />
              <AiFillFolder className="yellow" />
              <AiFillFolder className="black" />
              <AiFillFolder className="aqua" />
              <AiFillFolder className="orange" />
              <AiFillFolder className="gray" />
            </div>
            <Input className="text-center" placeholder="Folder Name" />
            <Button type="add">
              <AiOutlinePlus />
            </Button>
            <Button type="close">
              <AiOutlinePlus />
            </Button>
          </div>
        </>
      );
      break;
    case "openfolder":
      content = <></>;
      break;
    case "edit":
      content = (
        <>
          <h1>Edit Note</h1>

          <Input type="text" placeholder="Title" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Notes..."></textarea>
          <Button type="add">
            <AiOutlinePlus />
          </Button>
          <Button type="close">
            <AiOutlinePlus />
          </Button>
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

  return (
    <div className={`modal`}>
      <Wrapper>{content}</Wrapper>
    </div>
  );
}

export default Modal;
