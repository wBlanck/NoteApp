import { useEffect, useState } from "react";

//STYLES
import "./App.css";
// COMPONENTS
import SearchBar from "./components/SearchBar/SearchBar";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Note from "./components/Note/Note";
import Folder from "./components/Folder/Folder";

function App() {
  const [modalContent, setModalContent] = useState("");
  const [notes, setNotes] = useState(null);

  const [folders, setFolders] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/data");
    const data = await response.json();

    console.log(data);
    setNotes(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleModal = (content) => {
    const appContainer = document.querySelector(".app-container");
    appContainer.classList.toggle("slide-out");

    if (appContainer.classList.contains("slide-out")) {
      setModalContent(content);
    }
  };

  const addNote = async (note) => {
    const response = await fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const data = await response.json();

    setNotes([...notes, data]);

    toggleModal();
  };

  const deleteNote = async (id) => {
    await fetch(`http://localhost:3000/data/${id}`, { method: "DELETE" });
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (id) => {
    toggleModal("addNote");
    console.log("id", id);
    /* setEditNote(notes.filter((note) => note.id === id)); */
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
                <Note key={note.id} {...note} deleteNote={deleteNote} />
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
