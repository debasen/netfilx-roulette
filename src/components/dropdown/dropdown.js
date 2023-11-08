import React from 'react';
import './dropdown.scss';

function Dropdown({ options, selectedOption, onChange, someclass }) {
  return (
    <div className="select-container">
      <select className={someclass} value={selectedOption} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
      <div className="select-arrow"></div>
      <div className="select-options">
        {options.map((option, index) => (
          <div
            key={index}
            className={option === selectedOption ? "optionSelected" : "option"}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
