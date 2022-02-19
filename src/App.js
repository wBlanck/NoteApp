import { useContext, useEffect } from "react";
import NoteContext from "./context/noteapp/NoteContext";
import { getNotes } from "./context/noteapp/NoteActions";

//STYLES
import "./App.css";
// COMPONENTS
import SearchBar from "./components/SearchBar/SearchBar";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Note from "./components/Note/Note";
import Folder from "./components/Folder/Folder";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
  const { dispatch, showModal, modalContent, notes, folders, loading } =
    useContext(NoteContext);

  useEffect(() => {
    const getNotesData = async () => {
      const notesData = await getNotes();
      dispatch({ type: "GET_DATA", payload: notesData });
      dispatch({ type: "SET_LOADING", payload: false });
    };
    getNotesData();
  }, []);

  return (
    <>
      <h1>Notes</h1>
      <div className={`app-container ${showModal && "slide-out"}`}>
        {/* NOTES */}
        <Container>
          {loading && <LoadingSpinner />}

          {notes.length < 1 && <h2>Add Note...</h2>}
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
