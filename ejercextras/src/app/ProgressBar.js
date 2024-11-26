/**
 * Crea un componente ProgressBar que muestre una barra de 
 * progreso que se actualiza en función de un valor numérico. 
 * El valor puede cambiar a través de un campo de entrada 
 * y se muestra en la barra.
 */
import { useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    setProgress(event.target.value);
  };

  return (
    <div>
      <h2>Barra de Progreso</h2>
      <input
        type="number"
        value={progress}
        onChange={handleChange}
        max="100"
        min="0"
      />
      <div style={{ width: "100%", backgroundColor: "#e0e0e0" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "30px",
            backgroundColor: "green",
          }}
        ></div>
      </div>
      <p>{progress}%</p>
    </div>
  );
}
