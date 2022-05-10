import "./Input.scss";

const Input = ({ type, id, label, hideLabel, onChange, value }) => {
  return (
    <div className={`input ${hideLabel ? "dropdown--hide-label" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
