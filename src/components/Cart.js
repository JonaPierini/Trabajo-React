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
          ? cart.map((item) => <h2 key={item.id}>--{item.nombre} --</h2>)
          : null}
      </div>
      <div>
        <Link to="/compra">
          Finalizar compra
        </Link>
        <Link to = "/">
            <button onClick = {clear}>Vaciar Carrito</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart