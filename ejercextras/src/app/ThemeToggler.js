/**
 * Crea un componente ThemeToggler 
 * que permita al usuario elegir entre modo oscuro y claro.
 *  Guarda la preferencia del tema en el almacenamiento local 
 * (localStorage) para que persista al recargar la página.
 */
import { useState, useEffect } from "react";

export default function ThemeToggler() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.style.backgroundColor = theme === "dark" ? "black" : "white";
    document.body.style.color = theme === "dark" ? "white" : "black";
  }, [theme]);

  return (
    <div>
      <h2>Selecciona un tema</h2>
      <button onClick={() => setTheme("light")}>Claro</button>
      <button onClick={() => setTheme("dark")}>Oscuro</button>
    </div>
  );
}
