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

const notesDb = [
  {
    id: 1,
    title: "first note",
    message: "This is my first note",
  },
  {
    id: 2,
    title: "Groceries",
    message: "This is my first note",
  },
  {
    id: 3,
    title: "Studies",
    message: "This is my first note",
  },
  {
    id: 4,
    title: "Generic",
    message: "This is my first note",
  },
  {
    id: 5,
    title: "Test",
    message: "This is my first note",
  },
  {
    id: 6,
    title: "TEst222",
    message: "This is my first note",
  },
  {
    id: 7,
    title: "Taasda",
    message: "This is my first note",
  },
];

function App() {
  const [modalContent, setModalContent] = useState("");
  const [notes, setNotes] = useState(notesDb);

  /*   const { data, isPending, error } = useFetch("http://localhost:3000/data");

  useEffect(() => {
    setNotes(data);
  }, [data]);

  console.log(data);
 */

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

  return (
    <>
      <h1>Notes</h1>
      <div className="app-container">
        <Container>
          {!notes && <h2>Add Note...</h2>}
          <div className="notes">
            {notes && notes.map((note) => <Note key={note.id} {...note} />)}
          </div>
          <Button type="add" content="addNote" handleClick={toggleModal} />
        </Container>
        <Container>
          <h2>Add Folder...</h2>
        </Container>
        <SearchBar />
        <Modal
          content={modalContent}
          addNote={addNote}
          setModalContent={setModalContent}
        />
      </div>
    </>
  );
}

export default App;
