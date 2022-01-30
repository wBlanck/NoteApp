import { useContext, useState } from "react";
import Button from "./components/Button";
import FeaturedNotes from "./components/FeaturedNotes";
import Folders from "./components/Folders";
import Modal from "./components/Modal";
import SearchBar from "./components/SearchBar";
import AppContext from "./context/AppContext";

function App() {
  const { modalContent } = useContext(AppContext);
  return (
    <div className="app-container">
      <h1>Notes</h1>
      <FeaturedNotes />
      <Folders />
      <SearchBar />
      <div className="buttons">
        <Button>Add Note</Button>
        <Button>Add Folder</Button>
      </div>
      <Modal modalContent={modalContent} />
    </div>
  );
}

export default App;
