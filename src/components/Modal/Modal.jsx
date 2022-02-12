import { AiFillFolder } from "react-icons/ai";

import "./Modal.scss";

import Button from "../Button/Button";
import Container from "../Container/Container";
import Folder from "../Folder/Folder";
import Folders from "../Folders/Folders";

function Modal({ content, addNote }) {
  const activeFolder = (e) => {
    // reset folder classes from "folder-active"
    Array.from(document.querySelectorAll(".folder")).map((folder) =>
      folder.classList.remove("folder-active")
    );

    if (e.target.parentNode.classList.contains("folder")) {
      e.target.parentNode.classList.add("folder-active");
    } else {
      e.target.parentNode.parentNode.classList.add("folder-active");
    }
  };

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
            <ul className="folder-colors" onClick={activeFolder}>
              <Folder color="green" />
              <Folder color="blue" />
              <Folder color="pink" />
              <Folder color="yellow" />
              <Folder color="gray" />
              <Folder color="black" />
              <Folder color="aqua" />
              <Folder color="orange" />
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
