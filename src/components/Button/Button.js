import React from 'react';

const Button = ({ 
    label, 
    buttonClass,
    type, 
    handleClick, 
    disable,
}) => (
  
  <button 
    className={buttonClass}
    onClick={handleClick}
    type={type}
    disabled={ disable } 
  >
    {label}

    {/* spans for css effect*/}
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>

);

Button.defaultProps = {
  disable: false,
};

export default Button;