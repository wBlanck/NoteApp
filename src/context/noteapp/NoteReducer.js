const noteReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        notes: action.payload,
      };
    case "SHOW_MODAL":
      return {
        ...state,
        modalContent: action.payload,
        showModal: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modalContent: "",
        noteToEdit: null,
        showModal: false,
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
