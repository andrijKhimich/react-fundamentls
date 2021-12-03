import React from "react";

const Select = ({options, defaultValue, value, onChange}) => {
  return (
    <div>
      <select value={value} onChange={e => onChange(e.target.value)}>
        <option key={options.value} disabled value="">{defaultValue}</option>
        {options.map(option =>
          <option key={options.value} value={option.value}>{option.name}</option>
        )}
      </select>
    </div>
  )
}

export default Select;