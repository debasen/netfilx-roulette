import React from 'react';
import './dropdown.scss';

function Dropdown({ options, selectedOption, onChange }) {
  return (
    <div className="select-container">
      <select data-testid='dropdown-select' className='select-sort-by' value={selectedOption} onChange={onChange}>
        {options.map((option, index) => (
          <option className='option' key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
      <div className="select-arrow"></div>
    </div>
  );
}

export default Dropdown;
