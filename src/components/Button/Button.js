import React from 'react';

const Button = ({ 
    label, 
    buttonClass,
    type, 
    handleClick, 
}) => (
  
  <button 
    className={buttonClass}
    onClick={handleClick}
    type={type}
  >
    {label}
  </button>

);

Button.defaultProps = {
  onClick: null,
};

export default Button;