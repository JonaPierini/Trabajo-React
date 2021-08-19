import React, { useState, useContext } from "react";
import { CartContext } from "../store/CartContext";
import { database } from "../firebase/config";
import firebase from 'firebase/app'
import { Link } from "react-router-dom";

export default function FormCart() {
  const { cart } = useContext(CartContext);
  console.log(cart);
  const [user, setUser] = useState("");

  const tomarDatosUsario = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ventas = database.collection("ventas");
    const productos = database.collection("peliculas");

    ventas
      .add({
        productos: cart,
        user
      })
      .then((refDoc) => {
        cart.map((item) => {
          const decrement = item.cantidad;

          productos.doc(item.id).update({
            stock: firebase.firestore.FieldValue.increment(-decrement)
          });
        });
        console.log(refDoc.id);
      });
  };

  return (
    <div>
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={tomarDatosUsario}
            value={user}
            name="user"
            placeholder="ingrese su nombre"
            type="nombre"
          />
        </div>
         
        <button type="submit">
                Comprar
        </button>
           
       
        
      </form>
    </div>
  );
}
