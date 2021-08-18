import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store/CartContext";
const Cart = () => {
  const { cart } = useContext(CartContext);
  const {clear} = useContext(CartContext)

  return (
    <div>
      <Link to="/">Volver</Link>
      <div>
        {cart.length
          ? cart.map((item) => <h2 key={item.id}>--{item.nombre} -- ${item.precio}</h2>)
          : null}
      </div>
      <div>
        <Link to="/compra">
          Finalizar compra
        </Link>
        <button onClick = {clear} >Vaciar Carrito</button>
      </div>
    </div>
  );
}

export default Cart