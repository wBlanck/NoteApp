import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
//STYLES
import "./App.css";
// COMPONENTS
import SearchBar from "./components/SearchBar/SearchBar";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Note from "./components/Note/Note";
import Folder from "./components/Folder/Folder";

const notesDb = [
  {
    id: 1,
    title: "first note",
    message: "This is my first note",
    folder: "test",
  },
  {
    id: 2,
    title: "Groceries",
    message: "This is my first note",
    folder: "Food",
  },
  {
    id: 3,
    title: "Studies",
    message: "This is my first note",
    folder: "test",
  },
  {
    id: 4,
    title: "Generic",
    message: "This is my first note",
    folder: "test",
  },
  {
    id: 5,
    title: "Test",
    message: "This is my first note",
    folder: "test",
  },
  {
    id: 6,
    title: "TEst222",
    message: "This is my first note",
    folder: "test",
  },
  {
    id: 7,
    title: "Taasda",
    message: "This is my first note",
    folder: "test",
  },
];

function App() {
  const [modalContent, setModalContent] = useState("");
  const [notes, setNotes] = useState(notesDb);
  const [editNote, setEditNote] = useState(null);
  const [folders, setFolders] = useState([]);

  /*   const { data, isPending, error } = useFetch("http://localhost:3000/data");

  useEffect(() => {
    setNotes(data);
  }, [data]);

  console.log(data);
 */

  useEffect(() => {
    // FILTER FOLDERS
    const getFolders = notes.map((note) => note.folder);
    const sortFolders = getFolders.filter(
      (folder, pos) => getFolders.indexOf(folder) === pos
    );

    setFolders(sortFolders);
  }, [notes]);

  const toggleModal = (content) => {
    const appContainer = document.querySelector(".app-container");
    appContainer.classList.toggle("slide-out");

    if (appContainer.classList.contains("slide-out")) {
      setModalContent(content);
    }
  };

  const addNote = (note) => {
    note.length && setNotes([...notes, note]);
    toggleModal();
  };

  const edit = (id) => {
    toggleModal("addNote");
    setEditNote(notes.filter((note) => note.id === id));
    console.log(editNote);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <h1>Notes</h1>
      <div className="app-container">
        {/* NOTES */}
        <Container>
          {!notes && <h2>Add Note...</h2>}
          <div className="notes">
            {notes &&
              notes.map((note) => (
                <Note
                  key={note.id}
                  {...note}
                  deleteNote={deleteNote}
                  edit={edit}
                />
              ))}
          </div>
          <Button type="add" content="addNote" handleClick={toggleModal} />
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
        <Modal
          content={modalContent}
          addNote={addNote}
          editNote={editNote}
          setModalContent={setModalContent}
          toggle={toggleModal}
        />
      </div>
    </>
  );
}

export default App;
