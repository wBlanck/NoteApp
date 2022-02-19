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
        searchNote: "",
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
    case "SEARCH_NOTES":
      return {
        ...state,
        searchNote: action.payload,
      };
    case "SEARCHED_NOTES":
      return {
        ...state,
        searchedNotes: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default noteReducer;
