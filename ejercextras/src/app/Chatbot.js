/**
 * Crea un componente Chatbot que simule una conversación 
 * con el usuario. Al escribir un mensaje, 
 * el chatbot responde con una respuesta predefinida.
 */
import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "¡Hola! ¿En qué puedo ayudarte?" },
      ]);
    }, 1000);
  };

  return (
    <div>
      <h2>Chatbot</h2>
      <div>
        {messages.map((message, index) => (
          <p key={index} style={{ color: message.sender === "bot" ? "blue" : "green" }}>
            {message.sender === "bot" ? "Bot: " : "Tú: "} {message.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu mensaje..."
      />
      <button onClick={handleSendMessage}>Enviar</button>
    </div>
  );
}
