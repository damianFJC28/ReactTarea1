//import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import InputText from './componentes/InputText';
import AnalizeButton from './componentes/AnalizeButton';
import ResultPantalla from './componentes/ResultPantalla';

function App() {
  const [inputText, setInputText] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const handleInputChange = (newText) => {
    setInputText(newText);
  };

  const analyzeText = () => {
    const formattedText = inputText.replace(/[\W_]/g, '').toLowerCase();
    const reversedText = formattedText.split('').reverse().join('');
    setIsPalindrome(formattedText === reversedText);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Analizador de Texto</h1>
      <InputText inputText={inputText} onInputChange={handleInputChange} />
      <AnalizeButton onAnalyzeClick={analyzeText} />
      <ResultPantalla inputText={inputText} isPalindrome={isPalindrome} />
    </div>
  );
}

export default App;