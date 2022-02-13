import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import "./Modal.scss";

import Button from "../Button/Button";
import Container from "../Container/Container";
import Folder from "../Folder/Folder";

function Modal({ content, addNote, setModalContent }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteMessage, setNoteMessage] = useState("");
  const [folderTitle, setFolderTitle] = useState("");
  const [folderColor, setFolderColor] = useState("");

  const { postData, data, error } = useFetch(
    "http://localhost:3000/data",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (document.querySelector(".modal").classList.contains("add-note")) {
      /*   console.log(noteTitle);
      console.log(noteMessage); */

      noteTitle &&
        noteMessage &&
        postData({
          title: noteTitle,
          message: noteMessage,
          folder: "",
        });

      setNoteTitle("");
      setNoteMessage("");
      setModalContent("");
    } else {
      /*   console.log(folderTitle);
      console.log(folderColor); */

      setFolderColor("");
      setFolderTitle("");
      setModalContent("");
    }
  };

  const activeFolder = (e) => {
    // reset folder classes from "folder-active"
    Array.from(document.querySelectorAll(".folder")).map((folder) =>
      folder.classList.remove("folder-active")
    );

    if (e.target.parentNode.classList.contains("folder")) {
      e.target.parentNode.classList.add("folder-active");
      setFolderColor(e.target.style.color);
    }
    if (e.target.parentNode.parentNode.classList.contains("folder")) {
      e.target.parentNode.parentNode.classList.add("folder-active");
      setFolderColor(e.target.parentNode.style.color);
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
          <form onSubmit={handleSubmit}>
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
              <input
                type="text"
                placeholder="Folder Name"
                onChange={(e) => setFolderTitle(e.target.value)}
                value={folderTitle}
              />
              <Button type="add" handleClick={(e) => addNote(e)} />
              <Button type="close" handleClick={addNote} />
            </Container>
          </form>
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
