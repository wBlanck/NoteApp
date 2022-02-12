import Button from "../Button/Button";
import Container from "../Container/Container";
import "./Modal.scss";

function Modal({ content, addNote }) {
  console.log(content);
  return (
    <div className={`modal`}>
      <Container>
        <Button type="add" handleClick={addNote} />
      </Container>
    </div>
  );
}

export default Modal;
