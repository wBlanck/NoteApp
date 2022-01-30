import Button from "./components/Button";
import FeaturedNotes from "./components/FeaturedNotes";
import Folders from "./components/Folders";
import Modal from "./components/Modal";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="app-container">
      <h1>Notes</h1>
      <FeaturedNotes />
      <Folders />
      <SearchBar />
      <div className="buttons">
        <Button>Add Note</Button>
        <Button>Add Folder</Button>
      </div>
      <Modal />
    </div>
  );
}

export default App;
