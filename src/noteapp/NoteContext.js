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

  return (
    <NoteContext.Provider
      value={{
        initialState,
        modalContent: state.modalContent,
        showModal: state.showModal,
        notes: state.notes,
        noteToEdit: state.noteToEdit,
        folders: state.folders,
        dispatch,
      }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
