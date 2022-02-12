import Button from "../Button/Button";
import Container from "../Container/Container";
import "./Modal.scss";

function Modal() {
  return (
    <div className={`modal`}>
      <Container>
        <Button type="add" />
      </Container>
    </div>
  );
}

export default Modal;
