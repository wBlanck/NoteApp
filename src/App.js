import { useContext, useEffect, useState } from "react";

//STYLES
import "./App.css";
// COMPONENTS
import SearchBar from "./components/SearchBar/SearchBar";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Note from "./components/Note/Note";
import Folder from "./components/Folder/Folder";
import NoteContext from "./noteapp/NoteContext";

function App() {
  const { dispatch, showModal, modalContent, fetchData, notes, folders } =
    useContext(NoteContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Notes</h1>
      <div className={`app-container ${showModal && "slide-out"}`}>
        {/* NOTES */}
        <Container>
          {!notes && <h2>Add Note...</h2>}
          <div className="notes">
            {notes && notes.map((note) => <Note key={note.id} {...note} />)}
          </div>
          <Button
            type="add"
            content="addNote"
            handleClick={() =>
              dispatch({ type: "SHOW_MODAL", payload: "addNote" })
            }
          />
        </Container>

        {/* FOLDERS */}
        <Container>
          {!folders && <h2>Add Folder...</h2>}
          <div className="folders">
            {folders &&
              folders.map((folder, i) => <Folder key={i}>{folder}</Folder>)}
          </div>
        </Container>
        <SearchBar />
        <Modal content={modalContent} />
      </div>
    </>
  );
}

export default App;
