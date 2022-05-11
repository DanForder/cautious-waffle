import "./Dropdown.scss";

const Dropdown = ({ label, id, options, onChange, hideLabel, value }) => {
  return (
    <div className={`dropdown ${hideLabel ? "dropdown--hide-label" : ""}`}>
      <label className="dropdown__label" htmlFor={id}>
        {label}
      </label>
      <select
        className="dropdown__select"
        id={id}
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <option className="dropdown__option" value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
