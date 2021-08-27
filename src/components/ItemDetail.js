import React, { useState } from "react";
//importo hooks para poder usar el estado global
import { useContext } from "react";
import { Link } from "react-router-dom";
//importo el contexto a usar (estado global)
import { CartContext } from "../store/CartContext";

import ItemCount from "./ItemCount";

import '../App.css'
const ItemDetail = ({ producto }) => {
  //destructuro mi objeto y traigo lo que necesite de mi estado global
  //utilizo useContext y entre parentesis le paso el contexto del cual quiero traer mi data
  const { cart, addItem, editCart, isInCart } = useContext(CartContext);

  //estado contador
  const [contador, setContador] = useState(1);

  const [confirmaCompra, setConfirmaCompra] = useState(false);
  console.log(cart);

  const agregarAlCarrito = () => {
    setConfirmaCompra(true);
    if (isInCart(producto.id)) {
      editCart({ ...producto, cantidad: contador });
    } else {
      addItem({ ...producto, cantidad: contador });
    }
  };

 
  return (
    <div className = "ItemDetail">
      <img
        src={producto.img}
        alt={producto.nombre}
      />

      <div className = "ItemDetailProductos">
        <h5>{producto.nombre}</h5>

        <p>{producto.detalle}</p>
        <p className = "StockDisponible">
        Stock Disponible: {producto.stock ? producto.stock : "No hay stock"}
        </p>
        <p>${producto.precio}</p>

        {!confirmaCompra ? (
          <>
            <ItemCount
              initial={1}
              stock={producto.stock}
              contador={contador}
              setContador={setContador}
            />
            <button className = "AgregarAlCarrito"
              onClick={agregarAlCarrito}
              disabled = {producto.stock === 0}
              
            >
              Agregar al carrito
            </button>
          </>
        ) : (
          <>
            <button className = "EditarCompra"
              onClick={() => setConfirmaCompra(false)}
            >
              Editar compra
            </button>
            <div className ="IrAlCarrito">
              <Link to="/cart">
                Ir al carrito
              </Link>
            </div>
           
          </>
        )}
      </div>
      <div className = "SeguirComprando">
          <Link to="/">Seguir comprando</Link>
      </div>
     
    </div>
  );
};

export default ItemDetail;