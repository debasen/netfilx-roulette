import React from 'react';
import './dropdown.css';

function Dropdown({ options, selectedOption, onChange }) {
  return (
    <div className="select-container">
      <select className="select" value={selectedOption} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="select-arrow"></div>
      <div className="select-options">
        {options.map((option, index) => (
          <div
            key={index}
            className={option === selectedOption ? "option selected" : "option"}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
