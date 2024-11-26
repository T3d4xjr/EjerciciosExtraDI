/**
 * Crea un componente UserCRUD que permita agregar, 
 * editar y eliminar usuarios de una lista. 
 * Cada usuario debe tener un nombre, un correo electrónico y 
 * una edad. Muestra todos los usuarios en una tabla editable.
 */
import { useState } from "react";

export default function UserCRUD() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [editing, setEditing] = useState(null);

  const handleAddUser = () => {
    if (name && email && age) {
      const newUser = { id: users.length + 1, name, email, age };
      setUsers([...users, newUser]);
      setName("");
      setEmail("");
      setAge("");
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEditUser = (user) => {
    setEditing(user.id);
    setName(user.name);
    setEmail(user.email);
    setAge(user.age);
  };

  const handleSaveUser = () => {
    setUsers(
      users.map((user) =>
        user.id === editing ? { ...user, name, email, age } : user
      )
    );
    setEditing(null);
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div>
      <h2>CRUD con Usuarios</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo Electrónico"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Edad"
        />
        {editing ? (
          <button onClick={handleSaveUser}>Guardar</button>
        ) : (
          <button onClick={handleAddUser}>Agregar Usuario</button>
        )}
      </div>

      <h3>Lista de Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Editar</button>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
