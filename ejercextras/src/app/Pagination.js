/**
 * Crea un componente Pagination que reciba una lista de 
 * artículos y permita a los usuarios paginar entre ellos.
 * Muestra un máximo de 5 artículos por página y 
 * permite navegar entre las páginas usando botones 
 * "Anterior" y "Siguiente".
 */
import { useState } from "react";

export default function Pagination({ articles }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const currentArticles = articles.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>Artículos</h2>
      <ul>
        {currentArticles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
      <button onClick={handlePrev} disabled={currentPage === 0}>
        Anterior
      </button>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}
      >
        Siguiente
      </button>
    </div>
  );
}
