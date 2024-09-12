import React from 'react';

const InputText = ({ inputText, onInputChange }) => {
  return (
    <input
      type="text"
      value={inputText}
      onChange={(e) => onInputChange(e.target.value)}
      placeholder="Escribir texto"
      style={{ padding: '10px', fontSize: '16px', width: '300px' }}
    />
  );
};

export default InputText;