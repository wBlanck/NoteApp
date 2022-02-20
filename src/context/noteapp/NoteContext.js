import { createContext, useReducer } from "react";

import noteReducer from "./NoteReducer";

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const initialState = {
    alert: false,
    loading: true,
    modalContent: "",
    showModal: false,
    notes: [],
    noteToEdit: null,
    searchNote: "",
    searchedNotes: [],
    folders: [],
  };

  const [state, dispatch] = useReducer(noteReducer, initialState);

  return (
    <NoteContext.Provider
      value={{
        ...state,
        dispatch,
      }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
