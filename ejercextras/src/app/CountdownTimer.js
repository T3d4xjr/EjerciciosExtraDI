/**
 * Crea un componente CountdownTimer que permita al usuario 
 * establecer una cantidad de tiempo (en segundos) 
 * y muestre una cuenta regresiva. Al finalizar, 
 * muestra un mensaje de "Tiempo agotado".
 */
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState(0);
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    if (time <= 0 && countdown !== null) {
      clearInterval(countdown);
      setCountdown(null);
    }
  }, [time, countdown]);

  const startCountdown = () => {
    if (countdown) clearInterval(countdown);

    const newCountdown = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(newCountdown);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    setCountdown(newCountdown);
  };

  const resetCountdown = () => {
    clearInterval(countdown);
    setCountdown(null);
    setTime(0);
  };

  return (
    <div>
      <h2>Temporizador de Cuenta Regresiva</h2>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Establecer tiempo en segundos"
      />
      <button onClick={startCountdown}>Iniciar</button>
      <button onClick={resetCountdown}>Reiniciar</button>

      <h3>Tiempo restante: {time}s</h3>
      {time === 0 && <p>¡Tiempo agotado!</p>}
    </div>
  );
}
