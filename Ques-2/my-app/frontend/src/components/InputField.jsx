import React from 'react';
import '../styles/InputField.css';

const InputField = ({ label, type, value, onChange, id, required }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="input-field"
      />
    </div>
  );
};

export default InputField;
