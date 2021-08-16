import React, { useState } from "react";
//importo hooks para poder usar el estado global
import { useContext } from "react";
import { Link } from "react-router-dom";
//importo el contexto a usar (estado global)
import { CartContext } from "../store/CartContext";

import ItemCount from "./ItemCount";

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
    <div>
      <img
        src={producto.img}
        alt={producto.nombre}
      />

      <div>
        <h5>{producto.nombre}</h5>
        <p>{producto.precio}</p>
        <p>
          {producto.stock ? producto.stock : "No hay stock"}
        </p>

        {!confirmaCompra ? (
          <>
            <ItemCount
              initial={1}
              stock={10}
              contador={contador}
              setContador={setContador}
            />
            <button
              onClick={agregarAlCarrito}
            >
              Agregar al carrito
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setConfirmaCompra(false)}
            >
              Editar compra
            </button>
            <Link to="/cart">
              Ir al carrito
            </Link>
          </>
        )}
      </div>
      <Link to="/">Seguir comprando</Link>
    </div>
  );
};

export default ItemDetail;