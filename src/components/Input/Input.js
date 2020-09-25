import React from "react";
import '../../style/css/App.css';

const Input = ({ 
    label, 
    name, 
    type, 
    value, 
    handleChange, 
    className }) => (
        
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      className="form-control"
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
    />
  </div>
);

export default Input;