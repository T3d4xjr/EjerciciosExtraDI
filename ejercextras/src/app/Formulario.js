import React, { useState } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [aceptoTerminos, setAceptoTerminos] = useState(false);
  const [genero, setGenero] = useState("");
  const [comentarios, setComentarios] = useState("");

  const [nombreError, setNombreError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [edadError, setEdadError] = useState("");
  const [contrasenaError, setContrasenaError] = useState("");
  const [confirmarContrasenaError, setConfirmarContrasenaError] = useState("");
  const [aceptoTerminosError, setAceptoTerminosError] = useState("");
  const [generoError, setGeneroError] = useState("");

  // Validación de nombre
  const validarNombre = (nombre) => {
    if (nombre === "") {
      setNombreError("El nombre es obligatorio.");
    } else if (nombre.length < 3) {
      setNombreError("El nombre debe tener al menos 3 caracteres.");
    } else {
      setNombreError("");
    }
  };

  // Validación de email
  const validarEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === "") {
      setEmailError("El correo es obligatorio.");
    } else if (!emailRegex.test(email)) {
      setEmailError("Por favor ingrese un correo válido.");
    } else {
      setEmailError("");
    }
  };

  // Validación de edad
  const validarEdad = (edad) => {
    if (edad === "") {
      setEdadError("La edad es obligatoria.");
    } else if (isNaN(edad) || edad < 18) {
      setEdadError("Debes ser mayor de 18 años.");
    } else {
      setEdadError("");
    }
  };

  // Validación de contraseña
  const validarContrasena = (contrasena) => {
    if (contrasena.length < 6) {
      setContrasenaError("La contraseña debe tener al menos 6 caracteres.");
    } else {
      setContrasenaError("");
    }
  };

  // Validación de confirmación de contraseña
  const validarConfirmarContrasena = (confirmarContrasena) => {
    if (confirmarContrasena !== contrasena) {
      setConfirmarContrasenaError("Las contraseñas no coinciden.");
    } else {
      setConfirmarContrasenaError("");
    }
  };

  // Validación de términos
  const validarAceptoTerminos = () => {
    if (!aceptoTerminos) {
      setAceptoTerminosError("Debes aceptar los términos.");
    } else {
      setAceptoTerminosError("");
    }
  };

  // Validación de género
  const validarGenero = (genero) => {
    if (genero === "") {
      setGeneroError("Debes seleccionar un género.");
    } else {
      setGeneroError("");
    }
  };

  // Manejo del submit
  const manejarSubmit = (e) => {
    e.preventDefault();

    validarNombre(nombre);
    validarEmail(email);
    validarEdad(edad);
    validarContrasena(contrasena);
    validarConfirmarContrasena(confirmarContrasena);
    validarAceptoTerminos();
    validarGenero(genero);

    if (
      nombreError === "" &&
      emailError === "" &&
      edadError === "" &&
      contrasenaError === "" &&
      confirmarContrasenaError === "" &&
      aceptoTerminosError === "" &&
      generoError === ""
    ) {
      alert("Formulario enviado correctamente.");
    } else {
      alert("Por favor corrige los errores.");
    }
  };

  return (
    <div>
      <h2>Formulario de Registro Completo</h2>
      <form onSubmit={manejarSubmit}>
        <InputNombre
          nombre={nombre}
          setNombre={setNombre}
          validarNombre={validarNombre}
          nombreError={nombreError}
        />
        <InputEmail
          email={email}
          setEmail={setEmail}
          validarEmail={validarEmail}
          emailError={emailError}
        />
        <InputEdad
          edad={edad}
          setEdad={setEdad}
          validarEdad={validarEdad}
          edadError={edadError}
        />
        <InputContrasena
          contrasena={contrasena}
          setContrasena={setContrasena}
          validarContrasena={validarContrasena}
          contrasenaError={contrasenaError}
        />
        <InputConfirmarContrasena
          confirmarContrasena={confirmarContrasena}
          setConfirmarContrasena={setConfirmarContrasena}
          validarConfirmarContrasena={validarConfirmarContrasena}
          confirmarContrasenaError={confirmarContrasenaError}
        />
        <CheckboxAceptoTerminos
          aceptoTerminos={aceptoTerminos}
          setAceptoTerminos={setAceptoTerminos}
          aceptoTerminosError={aceptoTerminosError}
        />
        <InputGenero
          genero={genero}
          setGenero={setGenero}
          validarGenero={validarGenero}
          generoError={generoError}
        />
        <InputComentarios
          comentarios={comentarios}
          setComentarios={setComentarios}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

// Componentes de campos individuales

function InputNombre({ nombre, setNombre, validarNombre, nombreError }) {
  const manejarChange = (e) => {
    setNombre(e.target.value);
    validarNombre(e.target.value);
  };

  return (
    <div>
      <label>Nombre:</label>
      <input
        type="text"
        value={nombre}
        onChange={manejarChange}
        placeholder="Ingresa tu nombre"
      />
      {nombreError && <p >{nombreError}</p>}
    </div>
  );
}

function InputEmail({ email, setEmail, validarEmail, emailError }) {
  const manejarChange = (e) => {
    setEmail(e.target.value);
    validarEmail(e.target.value);
  };

  return (
    <div>
      <label>Correo Electrónico:</label>
      <input
        type="email"
        value={email}
        onChange={manejarChange}
        placeholder="Ingresa tu correo electrónico"
      />
      {emailError && <p>{emailError}</p>}
    </div>
  );
}

function InputEdad({ edad, setEdad, validarEdad, edadError }) {
  const manejarChange = (e) => {
    setEdad(e.target.value);
    validarEdad(e.target.value);
  };

  return (
    <div>
      <label>Edad:</label>
      <input
        type="number"
        value={edad}
        onChange={manejarChange}
        placeholder="Ingresa tu edad"
      />
      {edadError && <p >{edadError}</p>}
    </div>
  );
}

function InputContrasena({ contrasena, setContrasena, validarContrasena, contrasenaError }) {
  const manejarChange = (e) => {
    setContrasena(e.target.value);
    validarContrasena(e.target.value);
  };

  return (
    <div>
      <label>Contraseña:</label>
      <input
        type="password"
        value={contrasena}
        onChange={manejarChange}
        placeholder="Ingresa tu contraseña"
      />
      {contrasenaError && <p >{contrasenaError}</p>}
    </div>
  );
}

function InputConfirmarContrasena({ confirmarContrasena, setConfirmarContrasena, validarConfirmarContrasena, confirmarContrasenaError }) {
  const manejarChange = (e) => {
    setConfirmarContrasena(e.target.value);
    validarConfirmarContrasena(e.target.value);
  };

  return (
    <div>
      <label>Confirmar Contraseña:</label>
      <input
        type="password"
        value={confirmarContrasena}
        onChange={manejarChange}
        placeholder="Confirma tu contraseña"
      />
      {confirmarContrasenaError && <p >{confirmarContrasenaError}</p>}
    </div>
  );
}

function CheckboxAceptoTerminos({ aceptoTerminos, setAceptoTerminos, aceptoTerminosError }) {
  const manejarChange = (e) => {
    setAceptoTerminos(e.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={aceptoTerminos}
          onChange={manejarChange}
        />
        Acepto los términos y condiciones
      </label>
      {aceptoTerminosError && <p >{aceptoTerminosError}</p>}
    </div>
  );
}

function InputGenero({ genero, setGenero, validarGenero, generoError }) {
  const manejarChange = (e) => {
    setGenero(e.target.value);
    validarGenero(e.target.value);
  };

  return (
    <div>
      <label>Género:</label>
      <select value={genero} onChange={manejarChange}>
        <option value="">Selecciona un género</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
        <option value="otro">Otro</option>
      </select>
      {generoError && <p>{generoError}</p>}
    </div>
  );
}

function InputComentarios({ comentarios, setComentarios }) {
  const manejarChange = (e) => {
    setComentarios(e.target.value);
  };

  return (
    <div>
      <label>Comentarios:</label>
      <textarea
        value={comentarios}
        onChange={manejarChange}
        placeholder="Escribe tus comentarios"
      />
    </div>
  );
}
