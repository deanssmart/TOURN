import React from "react";

const Input = ({ 
    label, 
    name, 
    type, 
    value, 
    handleChange, 
    className }) => (
        
  <div className="form-group container-form">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
    />
  </div>
);

export default Input;