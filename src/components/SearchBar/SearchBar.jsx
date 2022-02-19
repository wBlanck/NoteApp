import "./SearchBar.scss";
import { useContext } from "react";
import NoteContext from "../../context/noteapp/NoteContext";

function SearchBar() {
  const { dispatch, searchNotes } = useContext(NoteContext);

  return (
    <input
      type="text"
      placeholder="Search Notes..."
      className="search-bar"
      value={searchNotes}
      onChange={(e) =>
        dispatch({ type: "SEARCH_NOTES", payload: e.target.value })
      }
    />
  );
}

export default SearchBar;
