/**
 * Crea un componente MemoryGame con cartas de colores. 
 * El usuario debe hacer clic en las cartas para intentar 
 * encontrar los pares correspondientes. 
 * Los pares deben desaparecer cuando se descubran correctamente.
 */
import { useState } from "react";

export default function MemoryGame() {
  const colors = ["#FF6347", "#FFD700", "#ADFF2F", "#8A2BE2", "#FF4500"];
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);

  function generateCards() {
    const duplicatedColors = [...colors, ...colors];
    return duplicatedColors.sort(() => Math.random() - 0.5);
  }

  const handleFlip = (index) => {
    if (flippedCards.length < 2) {
      const newFlippedCards = [...flippedCards, index];
      setFlippedCards(newFlippedCards);

      if (newFlippedCards.length === 2) {
        setTimeout(() => {
          if (cards[newFlippedCards[0]] !== cards[newFlippedCards[1]]) {
            setFlippedCards([]);
          }
        }, 1000);
      }
    }
  };

  return (
    <div>
      <h2>Juego de Memoria</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 100px)" }}>
        {cards.map((color, index) => (
          <div
            key={index}
            onClick={() => handleFlip(index)}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: flippedCards.includes(index) ? color : "#ccc",
              margin: "5px",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
