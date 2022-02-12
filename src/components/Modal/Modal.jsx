import { AiFillFolder } from "react-icons/ai";

import "./Modal.scss";

import Button from "../Button/Button";
import Container from "../Container/Container";
import Folder from "../Folder/Folder";
import Folders from "../Folders/Folders";

function Modal({ content, addNote }) {
  switch (content) {
    case "addNote":
      return (
        <div className={`modal addNote`}>
          <input type="text" placeholder="Title..." />

          <Container>
            <textarea placeholder="Message..." />
            <Button type="add" handleClick={addNote} />
            <Button type="close" handleClick={addNote} />
          </Container>
        </div>
      );
    case "addFolder":
      return (
        <div className={`modal add-folder`}>
          <Container>
            <h2>Folder Color</h2>
            <ul className="folder-colors">
              <AiFillFolder className="green" />
              <AiFillFolder className="blue" />
              <AiFillFolder className="pink" />
              <AiFillFolder className="yellow" />
              <AiFillFolder className="gray" />
              <AiFillFolder className="black" />
              <AiFillFolder className="aqua" />
              <AiFillFolder className="orange" />
            </ul>
            <input type="text" placeholder="Folder Name" />
            <Button type="add" handleClick={addNote} />
            <Button type="close" handleClick={addNote} />
          </Container>
        </div>
      );

    default:
      return (
        <div className={`modal`}>
          <Container>
            do something
            <Button type="add" />
          </Container>
        </div>
      );
  }
}

export default Modal;
