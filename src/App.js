import { useState } from "react";
//STYLES
import "./App.css";
// COMPONENTS
import SearchBar from "./components/SearchBar/SearchBar";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

function App() {
  const [modalContent, setModalContent] = useState("");

  const toggleModal = (content) => {
    const appContainer = document.querySelector(".app-container");
    appContainer.classList.toggle("slide-out");
    console.log(appContainer.classList.contains("slide-out"));
    if (appContainer.classList.contains("slide-out")) {
      setModalContent(content);
    }
  };

  const addNote = () => {
    toggleModal();
  };

  return (
    <>
      <h1>Notes</h1>
      <div className="app-container">
        <Container>
          <h2>Add Note...</h2>
          <Button type="add" content="addNote" handleClick={toggleModal} />
        </Container>
        <Container>
          <h2>Add Folder...</h2>
          <Button type="add" content="addFolder" handleClick={toggleModal} />
        </Container>
        <SearchBar />
        <Modal content={modalContent} addNote={addNote} />
      </div>
    </>
  );
}

export default App;
