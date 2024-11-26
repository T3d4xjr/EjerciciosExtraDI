/**
 * Crea un componente Dashboard que muestre estadísticas 
 * como cantidad de visitas, usuarios activos y nuevos registros. 
 * Agrega la opción de actualizar los datos 
 * (simulando una actualización).
 */
import { useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState({
    visits: 500,
    activeUsers: 120,
    newRegistrations: 50,
  });

  const updateData = () => {
    setData({
      visits: data.visits + 1,
      activeUsers: data.activeUsers + 1,
      newRegistrations: data.newRegistrations + 1,
    });
  };

  return (
    <div>
      <h2>Panel de Control</h2>
      <div>
        <p>Visitas: {data.visits}</p>
        <p>Usuarios Activos: {data.activeUsers}</p>
        <p>Registros Nuevos: {data.newRegistrations}</p>
      </div>
      <button onClick={updateData}>Actualizar Datos</button>
    </div>
  );
}
