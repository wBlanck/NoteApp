const noteReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        notes: action.payload,
      };
    case "SET_MODAL_CONTENT":
      return {
        ...state,
        modalContent: action.payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "EDIT_NOTE":
      return {
        ...state,
        notes: action.payload,
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: action.payload,
      };
    case "NOTE_TO_EDIT":
      return {
        ...state,
        noteToEdit: action.payload,
      };

    default:
      return state;
  }
};

export default noteReducer;
