import { useContext, useState } from "react";
import { AiFillFileAdd, AiFillFolderAdd } from "react-icons/ai";
import Button from "./components/Button";
import FeaturedNotes from "./components/FeaturedNotes";
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
      <FeaturedNotes />
      <Folders />
      <SearchBar />
      <div className="buttons">
        <Button handleClick={addNote} className="btn-note">
          <AiFillFileAdd />
        </Button>
        <Button handleClick={addFolder} className="btn-folder">
          <AiFillFolderAdd style={{ color: "#e0a743" }} />
        </Button>
      </div>
      <Modal modalContent={modalContent} />
    </div>
  );
}

export default App;
