/**
 * Crea un componente Notification que muestre notificaciones 
 * emergentes. Los usuarios pueden cerrar las notificaciones, 
 * y el componente debe mostrar una lista de notificaciones activas.
 */
import { useState } from "react";

export default function Notification() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    setNotifications([...notifications, { id: notifications.length + 1, message }]);
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div>
      <h2>Notificaciones</h2>
      <button onClick={() => addNotification("Nueva notificación")}>
        Agregar Notificación
      </button>
      <div>
        {notifications.map((notification) => (
          <div key={notification.id}>
            <p>{notification.message}</p>
            <button onClick={() => removeNotification(notification.id)}>Cerrar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
