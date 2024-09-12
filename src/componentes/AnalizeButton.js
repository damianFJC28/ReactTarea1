import React from 'react';

const AnalizeButton = ({ onAnalyzeClick }) => {
  return (
    <button onClick={onAnalyzeClick} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
      Analizar
    </button>
  );
};

export default AnalizeButton;