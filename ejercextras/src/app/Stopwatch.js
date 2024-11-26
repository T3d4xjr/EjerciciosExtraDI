/**
 * Crea un componente Stopwatch que funcione como cronómetro.
 *  El usuario debe poder iniciar, pausar y reiniciar el cronómetro. 
 * Muestra el tiempo transcurrido en formato minutos:segundos.
 */
import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>Cronómetro</h2>
      <p>{formatTime(time)}</p>
      <button onClick={() => setRunning(!running)}>
        {running ? "Pausar" : "Iniciar"}
      </button>
      <button onClick={() => { setRunning(false); setTime(0); }}>Reiniciar</button>
    </div>
  );
}
