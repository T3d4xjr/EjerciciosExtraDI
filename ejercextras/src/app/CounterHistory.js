/**
 Crea un componente CounterHistory que tenga un contador 
 y que guarde un historial de los valores anteriores del 
 contador cada vez que se incremente o decremente. 
 Muestra la lista de los valores del contador.
 */
 import { useState } from "react";

 export default function CounterHistory() {
   const [counter, setCounter] = useState(0);
   const [history, setHistory] = useState([]);
 
   const increment = () => {
     setCounter(counter + 1);
     setHistory([...history, counter + 1]);
   };
 
   const decrement = () => {
     setCounter(counter - 1);
     setHistory([...history, counter - 1]);
   };
 
   return (
     <div>
       <h2>Contador</h2>
       <p>{counter}</p>
       <button onClick={increment}>Incrementar</button>
       <button onClick={decrement}>Decrementar</button>
       <h3>Historial</h3>
       <ul>
         {history.map((value, index) => (
           <li key={index}>{value}</li>
         ))}
       </ul>
     </div>
   );
 }
 