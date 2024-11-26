/**
 * Crea un componente Calculator que permita a los usuarios 
 * realizar operaciones matemáticas básicas: suma, resta,
 *  multiplicación y división. Muestra el resultado 
 * y limpia los campos de entrada después de cada operación.
 */
import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) return;

    let res = 0;
    switch (operation) {
      case "sum":
        res = n1 + n2;
        break;
      case "subtract":
        res = n1 - n2;
        break;
      case "multiply":
        res = n1 * n2;
        break;
      case "divide":
        if (n2 !== 0) res = n1 / n2;
        else return alert("No se puede dividir por 0");
        break;
      default:
        return;
    }

    setResult(res);
  };

  return (
    <div>
      <h2>Calculadora</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div>
        <button onClick={() => handleCalculate("sum")}>Sumar</button>
        <button onClick={() => handleCalculate("subtract")}>Restar</button>
        <button onClick={() => handleCalculate("multiply")}>Multiplicar</button>
        <button onClick={() => handleCalculate("divide")}>Dividir</button>
      </div>
      {result !== null && <p>Resultado: {result}</p>}
    </div>
  );
}
