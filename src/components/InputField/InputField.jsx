import "./InputField.scss";

const InputField = ({ type, id, label, hideLabel, onChange, value }) => {
  return (
    <div
      className={`input-field ${hideLabel ? "input-field--hide-label" : ""}`}
    >
      <label className="input-field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input-field__input"
        id={id}
        type={type}
        step="any"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
