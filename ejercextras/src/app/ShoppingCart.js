/**
 * Crea un componente ShoppingCart que permita a los 
 * usuarios agregar productos a un carrito de compras. 
 * Muestra la lista de productos en el carrito y 
 * el total del precio de todos los productos.
 */
import { useState } from "react";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Camiseta", price: 20 },
    { id: 2, name: "Pantalón", price: 40 },
    { id: 3, name: "Zapatos", price: 60 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>

      <h3>Carrito de Compras</h3>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

      <p>Total: ${totalPrice}</p>
    </div>
  );
}
