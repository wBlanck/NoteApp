import "./Input.scss";
function Input({ type, placeholder, position }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{ textAlign: position }}
    />
  );
}

export default Input;
