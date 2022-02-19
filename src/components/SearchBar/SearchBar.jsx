import "./SearchBar.scss";
import { useContext } from "react";
import NoteContext from "../../context/noteapp/NoteContext";

function SearchBar() {
  const { dispatch, searchNote } = useContext(NoteContext);

  /*   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
 */
  return (
    <form>
      <input
        type="text"
        placeholder="Search Notes..."
        className="search-bar"
        value={searchNote}
        onChange={(e) => {
          dispatch({ type: "SEARCH_NOTES", payload: e.target.value });
        }}
      />
    </form>
  );
}

export default SearchBar;
