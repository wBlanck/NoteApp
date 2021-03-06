import { useContext, useEffect, useState } from "react";

import "./Modal.scss";

import Button from "../Button/Button";
import Container from "../Container/Container";
import NoteContext from "../../context/noteapp/NoteContext";
import { addNote, editNote } from "../../context/noteapp/NoteActions";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function Modal({ content }) {
  const { dispatch, notes, noteToEdit, loading } = useContext(NoteContext);

  const [noteTitle, setNoteTitle] = useState("");
  const [noteMessage, setNoteMessage] = useState("");

  useEffect(() => {
    if (notes && noteToEdit) {
      // get title & message from the note that was clicked
      const { title, message } = notes.filter(
        (note) => note.id === noteToEdit
      )[0];

      //display title & message from the note that was clicked
      setNoteTitle(title);
      setNoteMessage(message);
    }
  }, [notes, noteToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (noteTitle && noteMessage && !noteToEdit) {
      dispatch({ type: "SET_LOADING", payload: true });
      const note = await addNote({ title: noteTitle, message: noteMessage });

      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "ADD_NOTE", payload: note });

      closeModal();
    } else if (!noteToEdit) {
      // ADD CUSTOM ALERT NOTIFICATION HERE
      alert("fill in");
    }

    if (noteToEdit) {
      dispatch({ type: "SET_LOADING", payload: true });
      const updatedNote = await editNote(noteToEdit, {
        title: noteTitle,
        message: noteMessage,
      });
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({
        type: "EDIT_NOTE",
        payload: notes.map((note) =>
          note.id === updatedNote.id ? { ...note, ...updatedNote } : note
        ),
      });
      dispatch({
        type: "NOTE_TO_EDIT",
        payload: null,
      });

      closeModal();
    }
  };

  const closeModal = () => {
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
          {loading && <LoadingSpinner />}
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
              <Button type="close" handleClick={closeModal} />
            </Container>
          </form>
        </div>
      );
    case "editNote":
      return (
        <div className={`modal add-note`}>
          {loading && <LoadingSpinner />}
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
              <Button type="close" handleClick={closeModal} />
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
