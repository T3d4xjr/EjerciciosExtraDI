/**
 * Crea un componente que permita al usuario adivinar una 
 * contraseña de 4 caracteres alfanuméricos. 
 * Muestra cuántos intentos ha hecho el usuario 
 * y si la contraseña es correcta o incorrecta.
 */
import { useState } from "react";

export default function GuessPassword() {
  const [password] = useState("abcd");
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setAttempts(attempts + 1);
    if (guess === password) {
      setMessage("¡Contraseña correcta!");
    } else {
      setMessage("Contraseña incorrecta, inténtalo nuevamente.");
    }
  };

  return (
    <div>
      <h2>Adivina la Contraseña</h2>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleSubmit}>Intentar</button>
      <p>Intentos: {attempts}</p>
      <p>{message}</p>
    </div>
  );
}
