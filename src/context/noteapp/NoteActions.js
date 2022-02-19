export const addNote = async (note) => {
  const response = await fetch("http://localhost:3000/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
  const data = await response.json();

  return data;
};

export const getNotes = async () => {
  const response = await fetch("http://localhost:3000/data");
  const data = await response.json();

  return data;
};

export const editNote = async (id, updNote) => {
  const response = await fetch(`http://localhost:3000/data/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updNote),
  });

  const data = await response.json();

  return data;
};

export const searchNotes = (notes, searchNote) => {
  // SEARCH NOTES. COMBINE getNotes instead??

  return notes.filter((note) => {
    return note.title.toLowerCase().includes(searchNote.toLowerCase());
  });
};

export const deleteNote = async (id) => {
  await fetch(`http://localhost:3000/data/${id}`, { method: "DELETE" });
};
