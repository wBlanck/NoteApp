import { useContext, useEffect, useState } from "react";

import "./Modal.scss";

import Button from "../Button/Button";
import Container from "../Container/Container";
import NoteContext from "../../noteapp/NoteContext";

function Modal({ content }) {
  const { dispatch, addNote, editNote, notes, noteToEdit } =
    useContext(NoteContext);

  const [noteTitle, setNoteTitle] = useState("");
  const [noteMessage, setNoteMessage] = useState("");

  useEffect(() => {
    if (notes && noteToEdit) {
      // get title & message from the note that was clicked
      const { title, message } = notes.filter(
        (note) => note.id === noteToEdit
      )[0];

      //display title & message
      setNoteTitle(title);
      setNoteMessage(message);
    }
  }, [notes, noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (noteTitle && noteMessage && !noteToEdit) {
      const newNote = { title: noteTitle, message: noteMessage };
      addNote(newNote);
    }
    if (noteToEdit) {
      const updatedNote = { title: noteTitle, message: noteMessage };
      editNote(noteToEdit, updatedNote);
    }

    setNoteTitle("");
    setNoteMessage("");

    dispatch({
      type: "CLOSE_MODAL",
    });
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
              <Button type="update" />
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
