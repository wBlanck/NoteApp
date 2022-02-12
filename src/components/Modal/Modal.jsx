import Button from "../Button/Button";
import Container from "../Container/Container";
import "./Modal.scss";

function Modal({ content, addNote }) {
  switch (content) {
    case "addNote":
      return (
        <div className={`modal`}>
          <input type="text" />

          <Container>
            <textarea></textarea>
            <Button type="add" handleClick={addNote} />
          </Container>
        </div>
      );
    case "addFolder":
      return (
        <div className={`modal`}>
          <Container>
            AddFolder
            <Button type="add" handleClick={addNote} />
          </Container>
        </div>
      );

    default:
      return (
        <div className={`modal`}>
          <Container>
            do something
            <Button type="add" />
          </Container>
        </div>
      );
  }
}

export default Modal;
