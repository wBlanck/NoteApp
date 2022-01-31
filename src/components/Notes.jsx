import { AiOutlinePlus } from "react-icons/ai";
import Button from "./Button";
import Note from "./Note";

function Notes() {
  return (
    <div className="notes">
      {/* Click to add notes */}
      <Note />
      <Note />
      <Note />
      <Button>
        <AiOutlinePlus />
      </Button>
    </div>
  );
}

export default Notes;
