import { createContext, useReducer } from "react";
import noteReducer from "./NoteReducer";

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const initialState = {
    modalContent: "",
    showModal: false,
    notes: null,
    noteToEdit: null,
    folders: [],
  };

  const [state, dispatch] = useReducer(noteReducer, initialState);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/data");
    const data = await response.json();

    dispatch({
      type: "GET_DATA",
      payload: data,
    });
  };

  const addNote = async (note) => {
    console.log("add");
    const response = await fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const data = await response.json();

    dispatch({
      type: "ADD_NOTE",
      payload: data,
    });
  };

  const editNote = async (id, updNote) => {
    const response = await fetch(`http://localhost:3000/data/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updNote),
    });

    const data = await response.json();

    dispatch({
      type: "EDIT_NOTE",
      payload: state.notes.map((note) =>
        note.id === id ? { ...note, ...data } : note
      ),
    });

    dispatch({
      type: "NOTE_TO_EDIT",
      payload: null,
    });
  };

  const deleteNote = async (id) => {
    await fetch(`http://localhost:3000/data/${id}`, { method: "DELETE" });

    dispatch({
      type: "DELETE_NOTE",
      payload: state.notes.filter((note) => note.id !== id),
    });
  };

  return (
    <NoteContext.Provider
      value={{
        initialState,
        modalContent: state.modalContent,
        showModal: state.showModal,
        notes: state.notes,
        noteToEdit: state.noteToEdit,
        folders: state.folders,
        fetchData,
        deleteNote,
        addNote,
        editNote,
        dispatch,
      }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
