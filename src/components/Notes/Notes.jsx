import "./Notes.scss";
import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AppContext from "../../context/AppContext";
import Button from "../Button/Button";
import Note from "../Note/Note";

function Notes() {
  const { setModalContent } = useContext(AppContext);
  const addNote = () => {
    document.querySelector(".modal").classList.value = "modal slide-in edit";
    document.querySelector(".app-container").classList.add("slide-out");

    setModalContent("addnote");
  };
  return (
    <div className="notes">
      {/* Click to add notes */}
      <Note />
      <Note />
      <Note />
      <Button handleClick={addNote}>
        <AiOutlinePlus />
      </Button>
    </div>
  );
}

export default Notes;
