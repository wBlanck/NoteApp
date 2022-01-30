import { useContext } from "react";
import AppContext from "../context/AppContext";

function SearchBar() {
  const { setModalContent } = useContext(AppContext);

  const slide = () => {
    document.querySelector(".modal").classList.value =
      "modal slide-in flex-start";
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
