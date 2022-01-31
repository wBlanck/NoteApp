import { useContext, useState } from "react";

import Notes from "./components/Notes";
import Folders from "./components/Folders";
import Modal from "./components/Modal";
import SearchBar from "./components/SearchBar";
import AppContext from "./context/AppContext";

function App() {
  const { modalContent, setModalContent } = useContext(AppContext);
  const addNote = () => {
    document.querySelector(".modal").classList.value = "modal slide-in";
    document.querySelector(".btn-note").classList.value = "btn slide-up-right";

    setModalContent("addnote");
  };
  const addFolder = () => {
    document.querySelector(".modal").classList.value =
      "modal slide-in flex-center";

    document.querySelector(".btn-folder").classList.value = "btn slide-up-left";

    setModalContent("addfolder");
  };
  return (
    <div className="app-container">
      <h1>Notes</h1>
      <Notes />
      <Folders />
      <SearchBar />

      <Modal modalContent={modalContent} />
    </div>
  );
}

export default App;
