import { useContext, useState } from "react";

import Notes from "./components/Notes/Notes";
import Folders from "./components/Folders/Folders";
import Modal from "./components/Modal/Modal";
import SearchBar from "./components/SearchBar/SearchBar";
import AppContext from "./context/AppContext";

function App() {
  return (
    <>
      <div className="app-container">
        <h1>Notes</h1>
        <Notes />
        <Folders />
        <SearchBar />
      </div>
      <Modal />
    </>
  );
}

export default App;
