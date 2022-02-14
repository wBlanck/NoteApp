import { useEffect, useState } from "react";

import "./Modal.scss";

import Button from "../Button/Button";
import Container from "../Container/Container";

function Modal({
  content,
  notes,
  addNote,
  editNote,
  noteToEdit,
  setNoteToEdit,
  setModalContent,
  toggleModal,
}) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteMessage, setNoteMessage] = useState("");

  useEffect(() => {
    noteToEdit &&
      setNoteTitle(notes.filter((note) => note.id === noteToEdit)[0].title);
    noteToEdit &&
      setNoteMessage(notes.filter((note) => note.id === noteToEdit)[0].message);
  }, [noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (noteTitle && noteMessage && !noteToEdit) {
      addNote({ title: noteTitle, message: noteMessage });
    }
    if (noteToEdit) {
      editNote(noteToEdit, { title: noteTitle, message: noteMessage });
    }

    setNoteTitle("");
    setNoteMessage("");
    setModalContent("");
    toggleModal();
  };

  /* const activeFolder = (e) => {
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
  }; */

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
              <Button type="add" />
              <Button type="close" />
            </Container>
          </form>
        </div>
      );
    case "editNote":
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
              <Button type="add" />
              <Button type="close" />
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
