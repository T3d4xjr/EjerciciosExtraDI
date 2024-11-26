/**
 * Crea un componente WordCounter que permita a los usuarios 
 * escribir un texto en un campo de entrada. 
 * Muestra el número de palabras que el texto contiene.
 */
import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div>
      <h2>Contador de Palabras</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe aquí..."
        rows="5"
        cols="50"
      />
      <p>Número de palabras: {wordCount}</p>
    </div>
  );
}
