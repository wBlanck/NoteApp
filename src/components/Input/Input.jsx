import "./Input.scss";
function Input({ type, placeholder, className }) {
  return <input type={type} placeholder={placeholder} className={className} />;
}

export default Input;
