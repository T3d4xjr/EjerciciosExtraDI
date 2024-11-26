"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Ejercicioextra1 from "./Formulario";
import Ejercicioextra2 from "./TextCarousel";
import Ejercicioextra3 from "./Formulario2"
import Ejercicioextra5 from "./CounterHistory"
import Ejercicioextra6 from "./TaskList"
import Ejercicioextra7 from "./ThemeToggler"
import Ejercicioextra8 from "./AdivinaContraseña"
import Ejercicioextra10 from "./ShoppingCart"
import Ejercicioextra11 from "./ProgressBar"
import Ejercicioextra12 from "./GuessGame"
import Ejercicioextra13 from "./CommentSection"
import Ejercicioextra14 from "./MemoryGame"
import Ejercicioextra15 from "./WordCounter"
import Ejercicioextra17 from "./Calculator"
import Ejercicioextra18 from "./ProductReview"
import Ejercicioextra19 from "./CountdownTimer"
import Ejercicioextra20 from "./UserCRUD"
import Ejercicioextra21 from "./WordGuessGame"
import Ejercicioextra22 from "./Stopwatch"
import Ejercicioextra23 from "./Chatbot"
import Ejercicioextra24 from "./Notification"
import Ejercicioextra25 from "./Dashboard"




export default function Home() {
  const items = [
    {
      titulo: "Item 1",
      descripcion: "Este es el primer ítem. Aquí puedes agregar una descripción más detallada.",
      imagen: "https://via.placeholder.com/400x300?text=Imagen+1"
    },
    {
      titulo: "Item 2",
      descripcion: "Descripción del segundo ítem. Aquí también puedes mostrar información adicional.",
      imagen: "https://via.placeholder.com/400x300?text=Imagen+2"
    },
    {
      titulo: "Item 3",
      descripcion: "Tercer ítem con más información sobre este contenido.",
      imagen: "https://via.placeholder.com/400x300?text=Imagen+3"
    },
    {
      titulo: "Item 4",
      descripcion: "Este es el cuarto ítem, con un poco más de detalles.",
      imagen: "https://via.placeholder.com/400x300?text=Imagen+4"
    },
    // Agrega más ítems según sea necesario...
  ];
  return (
    <div>
       <h1>Ejercicio 1</h1>
      <Ejercicioextra1/>
      <h1>Ejercicio 2</h1>
      <Ejercicioextra2 items={items}/>
      <h1>Ejercicio 3</h1>
      <Ejercicioextra3/>
      
      <h1>Ejercicio 5</h1>
      <Ejercicioextra5/>
      <h1>Ejercicio 6</h1>
      <Ejercicioextra6/>
      <h1>Ejercicio 7</h1>
      <Ejercicioextra7/>
      <h1>Ejercicio 8</h1>
      <Ejercicioextra8/>
      <h1>Ejercicio 10</h1>
      <Ejercicioextra10/>
      <h1>Ejercicio 11</h1>
      <Ejercicioextra11/>
      <h1>Ejercicio 12</h1>
      <Ejercicioextra12/>
      <h1>Ejercicio 13</h1>
      <Ejercicioextra13/>
      <h1>Ejercicio 14</h1>
      <Ejercicioextra14/>
      <h1>Ejercicio 15</h1>
      <Ejercicioextra15/>
      <h1>Ejercicio 17</h1>
      <Ejercicioextra17/>
      <h1>Ejercicio 18</h1>
      <Ejercicioextra18/>
      <h1>Ejercicio 19</h1>
      <Ejercicioextra19/>
      <h1>Ejercicio 20</h1>
      <Ejercicioextra20/>
      <h1>Ejercicio 21</h1>
      <Ejercicioextra21/>
      <h1>Ejercicio 22</h1>
      <Ejercicioextra22/>
      <h1>Ejercicio 23</h1>
      <Ejercicioextra23/>
      <h1>Ejercicio 24</h1>
      <Ejercicioextra24/>
      <h1>Ejercicio 25</h1>
      <Ejercicioextra25/>
    </div>
  );
}
