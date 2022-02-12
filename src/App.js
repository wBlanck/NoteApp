import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <h1>Notes</h1>
      <div className="app-container">
        <Container>
          <h2>Add Note...</h2>
          <Button type="add" />
        </Container>
        <Container>
          <h2>Add Folder...</h2>
          <Button type="add" />
        </Container>
        <SearchBar />
        <Modal />
      </div>
    </>
  );
}

export default App;
