/**
 * Crea un componente GuessGame donde el jugador 
 * debe adivinar un número entre 1 y 100. 
 * El jugador puede elegir el nivel de dificultad 
 * (fácil, medio, difícil) que modifica el rango de números 
 * posibles y la cantidad de intentos disponibles.
 */
import { useState } from "react";

export default function GuessGame() {
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [level, setLevel] = useState("fácil");
  const [attempts, setAttempts] = useState(0);
  const [target, setTarget] = useState(generateTarget());

  function generateTarget() {
    const ranges = {
      fácil: [1, 50],
      medio: [1, 75],
      difícil: [1, 100],
    };
    const [min, max] = ranges[level];
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleGuess = () => {
    setAttempts(attempts + 1);
    if (parseInt(guess) === target) {
      setFeedback("¡Correcto!");
    } else {
      setFeedback(parseInt(guess) > target ? "Demasiado alto" : "Demasiado bajo");
    }
  };

  return (
    <div>
      <h2>Adivina el Número</h2>
      <div>
        <label>Selecciona el nivel: </label>
        <select onChange={(e) => setLevel(e.target.value)} value={level}>
          <option value="fácil">Fácil</option>
          <option value="medio">Medio</option>
          <option value="difícil">Difícil</option>
        </select>
      </div>
      <div>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={handleGuess}>Adivinar</button>
      </div>
      <p>Intentos: {attempts}</p>
      <p>{feedback}</p>
    </div>
  );
}
