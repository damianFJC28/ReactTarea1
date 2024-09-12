import React from 'react';

const ResultPantalla = ({ inputText, isPalindrome }) => {
  if (isPalindrome === null) {
    return null; // No mostrar nada si no se ha analizado aún.
  }

  return (
    <h2>
      El texto "{inputText}" {isPalindrome ? 'es  capicúa' : 'no es capicúa'}
    </h2>
  );
};

export default ResultPantalla;