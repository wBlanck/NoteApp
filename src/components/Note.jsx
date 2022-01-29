import { MdDeleteForever } from "react-icons/md";

function Note() {
  return (
    <div>
      <span>First note</span>
      <div className="note-footer">
        <small>22/01/30</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
}

export default Note;
