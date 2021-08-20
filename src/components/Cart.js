import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store/CartContext";
import '../App.css'
const Cart = () => {
  const { cart } = useContext(CartContext);
  const {clear} = useContext(CartContext)

  return (
    <div className = "Carrito">
      <div className = "Carrito-Volver">
           <Link to="/">Volver</Link>
      </div>
      <div className = "Carrito-Item">
        {cart.length
          ? cart.map((item) => <h2 key={item.id}>{item.nombre} </h2>)
          : null}
      </div>
      <div className = "Carrito-FinalizarCompra">
        <Link to="/compra">
          Finalizar compra
        </Link>
        <Link to = "/">
            <button className = "Carrito-VaciarCarrito" onClick = {clear}>Vaciar Carrito</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart