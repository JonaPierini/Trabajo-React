import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store/CartContext";
import '../App.css'
const Cart = ({item}) => {
  const { cart, total, cartLength, cantidadProductos } = useContext(CartContext);
  const {clear} = useContext(CartContext)
  const {deleteItem} = useContext(CartContext)
 

  return (
    cartLength > 0 ?
    <div className = "Carrito">
      <div className = "Carrito-Volver">
           <Link to="/">Volver</Link>
      </div>
      <div className = "Carrito-Item">
        {cart.length
          ? cart.map((item) => 
          <div className = "Carrito-Item-Div" key={item.id}>{item.nombre} - ${item.precio} -
            <button onClick={()=> deleteItem(item.id)}>Borrar Producto</button> 
          </div>)
          : null}
      </div>
      <h3> PELICULAS en el Carrito: {cantidadProductos} </h3>
      <h3>Total: ${total} </h3>

      <div className = "Carrito-FinalizarCompra">
        <Link className ="Carrito-FinalizarCompraA" to="/compra">
          Finalizar compra
        </Link>
        
            <button disabled = {item === null} className = "Carrito-VaciarCarrito" onClick = {clear}>Vaciar Carrito</button>
      </div>
    </div>
    : <h3>SU CARRITO SE ENCUENTRA VACIO</h3>
  );
}

export default Cart