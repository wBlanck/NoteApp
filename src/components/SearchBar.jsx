import { useContext } from "react";
import AppContext from "../context/AppContext";

function SearchBar() {
  const { setModalContent } = useContext(AppContext);

  const slide = () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("slide-in");
    setModalContent("search");
  };

  return (
    <input
      type="text"
      placeholder="Search Notes..."
      className="search-bar"
      onClick={slide}
    />
  );
}

export default SearchBar;
