import "./Modal.scss";

import Button from "../Button/Button";
import Container from "../Container/Container";
import Folder from "../Folder/Folder";
import { useState } from "react";

function Modal({ content, addNote }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteMessage, setNoteMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(noteTitle);
    console.log(noteMessage);

    setNoteTitle("");
  };

  const activeFolder = (e) => {
    // reset folder classes from "folder-active"
    Array.from(document.querySelectorAll(".folder")).map((folder) =>
      folder.classList.remove("folder-active")
    );

    if (e.target.parentNode.classList.contains("folder")) {
      e.target.parentNode.classList.add("folder-active");
    }
    if (e.target.parentNode.parentNode.classList.contains("folder")) {
      e.target.parentNode.parentNode.classList.add("folder-active");
    }
  };

  switch (content) {
    case "addNote":
      return (
        <div className={`modal add-note`}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title..."
              onChange={(e) => setNoteTitle(e.target.value)}
              value={noteTitle}
            />

            <Container>
              <textarea
                placeholder="Message..."
                onChange={(e) => setNoteMessage(e.target.value)}
                value={noteMessage}
              />
              <Button type="add" handleClick={addNote} />
              <Button type="close" handleClick={addNote} />
            </Container>
          </form>
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
            <Button type="add" handleClick={(e) => addNote(e)} />
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
