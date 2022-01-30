import React from "react";

function SearchBar() {
  const slide = () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("slide-in");
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
