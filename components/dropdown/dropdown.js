import React from 'react';

function Dropdown({ options, selectedOption, onChange }) {
  return (
    <div className="select-container">
      <select data-testid='dropdown-select' className='select-sort-by' value={selectedOption} onChange={onChange}>
        {Object.keys(options).map((key) => (
          <option className='option' key={key} value={key}>
            {options[key].toUpperCase()}
          </option>
        ))}
      </select>
      <div className="select-arrow"></div>
    </div>
  );
}

export default Dropdown;
