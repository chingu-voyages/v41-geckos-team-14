import React from 'react';
import './App.css';

const buttonStyle = {
  margin: '20px'
};

const Button = ({ label, handleClick }) => (
  <button
    className="button"
    style={buttonStyle}
    onClick={handleClick}
  >
    {label}
  </button>
);

export default Button;