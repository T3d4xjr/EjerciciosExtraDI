/**
 * Crea un componente TaskList que permita a los usuarios 
 * agregar tareas. Cada tarea debe tener un título, 
 * una descripción, y una fecha límite. 
 * Muestra todas las tareas en una lista 
 * ordenada por la fecha límite.
 */
import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addTask = () => {
    const newTask = { title, description, dueDate: new Date(dueDate) };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  const sortedTasks = tasks.sort((a, b) => a.dueDate - b.dueDate);

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={addTask}>Agregar Tarea</button>
      <ul>
        {sortedTasks.map((task, index) => (
          <li key={index}>
            {task.title} - {task.description} -{" "}
            {task.dueDate.toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
