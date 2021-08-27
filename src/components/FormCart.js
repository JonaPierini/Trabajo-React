import React, { useState, useContext } from "react";
import { CartContext } from "../store/CartContext";
import { database } from "../firebase/config";
import firebase from 'firebase/app'
import '../App.css'
import { Link } from "react-router-dom";
export default function FormCart() {
  const { cart } = useContext(CartContext);
  console.log(cart);
  const [user, setUser] = useState("");
  const [apellido, setApellido] = useState("")
  const[email, setEmail] = useState("")
  const {clear} = useContext(CartContext);
  

  const tomarDatosUsarioNombre = (e) => {
    setUser(e.target.value);
     
  };

  const tomarDatosUsarioApellido = (e) => {
    setApellido(e.target.value);
 
  };

  const tomarDatosUsarioEmail = (e) => {
    setEmail(e.target.value);
    
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
  

    const ventas = database.collection("ventas");
    const productos = database.collection("peliculas");
    
    ventas
      .add({
        productos: cart,
        user,
        apellido,
        email,
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
        alert(`GRACIAS POR SU COMPRA: ${user}`)
      } else{
        alert("CARRITO VACIO")
      }
        clear()
        
      });
  };

  return (
    <div className = "FormularioFinalizarCompra">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            onChange={tomarDatosUsarioNombre}
            value={user}
            name="user"
            placeholder="Ingrese su Nombre"
            type="nombre"
          />
          <input
             onChange={tomarDatosUsarioApellido}
             value= {apellido}
             lastName="apellido"
             placeholder="Ingrese su Apellido"
             type="apellido"
          ></input>
          <input
            onChange={tomarDatosUsarioEmail}
            value={email}
            email="email"
            placeholder="Ingrese su Correo"
            type="email"
          ></input>
          
        </div>
      
            <button disabled={user.length === 0 || apellido.length === 0 ||email.length === 0} type = "submit">
                    Comprar
            </button>    
            <Link to = "/"><button>Volver</button></Link>     
      </form>
    </div>
  );
}
