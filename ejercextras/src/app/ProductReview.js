/**
 * Crea un componente ProductReview donde los usuarios 
 * puedan escribir una reseña para un producto. 
 * Las reseñas deben tener un título, texto y 
 * calificación de 1 a 5 estrellas. Muestra todas las reseñas 
 * y la calificación promedio.
 */
import { useState } from "react";

export default function ProductReview() {
  const [reviews, setReviews] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);

  const handleAddReview = () => {
    setReviews([
      ...reviews,
      { id: reviews.length + 1, title, text, rating },
    ]);
    setTitle("");
    setText("");
    setRating(1);
  };

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length || 0;

  return (
    <div>
      <h2>Reseñas de Producto</h2>
      <div>
        <input
          type="text"
          placeholder="Título de la reseña"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Escribe tu reseña"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button onClick={handleAddReview}>Agregar Reseña</button>
      </div>

      <h3>Reseñas</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.title}</strong> ({review.rating} estrellas)
            <p>{review.text}</p>
          </li>
        ))}
      </ul>

      <h3>Promedio de Calificación: {averageRating.toFixed(1)} estrellas</h3>
    </div>
  );
}
