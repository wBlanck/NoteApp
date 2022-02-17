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
        deleteNote,
        dispatch,
      }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
