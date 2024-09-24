import { useState } from 'react';

export default function FeedbackForm() {
  function handleClick() {
    const name = prompt('Comment vous appelez-vous?');
    alert(`Bonjour ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Saluer
    </button>
  );
}