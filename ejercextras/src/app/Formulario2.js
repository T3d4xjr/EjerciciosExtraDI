/**
 * Crea un formulario de contacto con campos para nombre, 
 * correo electrónico y mensaje. Al enviar el formulario, 
 * muestra un mensaje de éxito y limpia los campos del formulario. 
 * Si alguno de los campos está vacío, 
 * muestra un mensaje de error junto a ese campo.
 */
import { useState } from "react";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !mensaje) {
      setError("Todos los campos son obligatorios.");
    } else {
      setError("");
      setSuccess(true);
      setNombre("");
      setEmail("");
      setMensaje("");
    }
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>¡Mensaje enviado con éxito!</p>}
    </div>
  );
}
