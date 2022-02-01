import "./Notes.scss";
import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AppContext from "../../context/AppContext";

import Note from "../Note/Note";
import Wrapper from "../Wrapper/Wrapper";

function Notes() {
  const { setModalContent } = useContext(AppContext);
  const addNote = () => {
    document.querySelector(".modal").classList.add("slide-in");
    document.querySelector(".app-container").classList.add("slide-out");

    setModalContent("addnote");
  };
  return (
    <div className="notes" handleClick={addNote}>
      {/* Click to add notes */}
      <Note />
      <Note />
      <Note />
    </div>
  );
}

export default Notes;
