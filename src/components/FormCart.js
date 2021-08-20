import React, { useState, useContext } from "react";
import { CartContext } from "../store/CartContext";
import { database } from "../firebase/config";
import firebase from 'firebase/app'

export default function FormCart() {
  const { cart } = useContext(CartContext);
  console.log(cart);
  const [user, setUser] = useState("");
  const {clear} = useContext(CartContext);
  

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
        if(cart.length > 0){
        alert(`Gracias por su compra ${user}`)
      } else{
        alert("Carrito vacio")
      }
        clear()
        
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
      
            <button disabled={user.length === 0 } type = "submit">
                    Comprar
            </button>
      
       
           
       
        
      </form>
    </div>
  );
}
