/**
 * Crea un componente WordGuessGame 
 * donde el usuario debe adivinar una palabra. 
 * Muestra letras reemplazadas por guiones bajos y 
 * da pistas cuando el jugador haga un intento incorrecto.
 */
import { useState } from "react";

export default function WordGuessGame() {
  const word = "react";
  const [guess, setGuess] = useState("");
  const [maskedWord, setMaskedWord] = useState("_".repeat(word.length));
  const [hint, setHint] = useState("");

  const handleGuess = () => {
    let newHint = hint;
    let newMaskedWord = maskedWord.split("");

    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess[i]) {
        newMaskedWord[i] = guess[i];
      } else {
        newHint += `La letra ${guess[i]} no está en la palabra. `;
      }
    }

    setMaskedWord(newMaskedWord.join(""));
    setHint(newHint);

    if (newMaskedWord.join("") === word) {
      alert("¡Has adivinado la palabra!");
    }
  };

  return (
    <div>
      <h2>Adivinanza de Palabra</h2>
      <p>{maskedWord}</p>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength={word.length}
      />
      <button onClick={handleGuess}>Adivinar</button>
      {hint && <p>{hint}</p>}
    </div>
  );
}
