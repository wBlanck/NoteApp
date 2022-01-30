import React from "react";
import Note from "./Note";

function FeaturedNotes() {
  return (
    <div className="featured-notes">
      {/* Click to add notes */}
      <Note />
      <Note />
      <Note />
    </div>
  );
}

export default FeaturedNotes;
