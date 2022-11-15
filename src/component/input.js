import React from 'react';
import '../App.css';

const Input = ({ label, type, name, value, placeholder, handleChange }) => (
    <label>{label}
        <input
            className="input"
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
        />
    </label>
);

export default Input;