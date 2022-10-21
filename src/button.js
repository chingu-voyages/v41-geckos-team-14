import React from 'react';
import './App.css';

const Button = ({ label, handleClick }) => (
  <button
    className="button"
    onClick={handleClick}
  >
    {label}
  </button>
);

export default Button;