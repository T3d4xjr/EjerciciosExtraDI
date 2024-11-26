/**
 * Crea un componente Clock que muestre la hora actual 
 * y permita al usuario elegir la zona horaria de su 
 * preferencia para mostrar la hora correspondien
 */
import { useState, useEffect } from "react";

export default function Clock() {
  const [timezone, setTimezone] = useState("UTC");
  const [time, setTime] = useState(new Date().toLocaleString("en-US", { timeZone: timezone }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString("en-US", { timeZone: timezone }));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div>
      <h2>Reloj</h2>
      <select onChange={(e) => setTimezone(e.target.value)} value={timezone}>
        <option value="UTC">UTC</option>
        <option value="America/New_York">Nueva York</option>
        <option value="Europe/Madrid">Madrid</option>
      </select>
      <p>Hora actual: {time}</p>
    </div>
  );
}
