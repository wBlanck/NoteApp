import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="app-container">
      <h1>Notes</h1>
      <Container>
        <h2>Add Note...</h2>
        <Button type="add" />
      </Container>
      <Container />
      <SearchBar />
    </div>
  );
}

export default App;
