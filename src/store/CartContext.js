//importo los elementos necesarios para crear mi estado
import React, { createContext, useState, useEffect} from "react";

//creo mi Contexto para ser usado en cualquier componente
//genero un export const porque lo tengo que importar cada vez que lo quiera usar
export const CartContext = createContext();

//creo mi componente que va a contener mi estado global, el cual sera utilizado en App.js
const CartContextProvider = ({ children }) => {
  //este useState se va a transformar en mi estado global
  const [cart, setCart] = useState([]);
  //funciones que modificaran el cart
  //aagrega al carrito
  const agregarItem = (item) => {
    setCart([...cart, item]);
  };



  //ver si esta en el carrito
  const estaEnElCart = (id) => {
    const chequear = cart.filter((item) => item.id === id);
    return chequear.length > 0;
  };

  //funcion para editar la cantidad si ya se encuentra
  const editCart = (itemEditar) => {
    const editar = cart.map((item) =>
      item.id === itemEditar.id ? itemEditar : item
    );
    setCart(editar);
  };

  //funcion para limpiar todo el carrito //
  const clear = () => {
    setCart([]);
  };

  //funcion para remover un Item del carrito
  const deleteItem = (id) => {
    const nuevoCarrito = cart.filter((item) => item.id !== id);
    setCart(nuevoCarrito);
  };


  // total
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, {cantidad, precio}) => {
        return acc = acc + (precio * cantidad)
     }, 0))
    }, [cart])

  
     // cantidad de productos
  const [cantidadProductos, setCantidadProductos] = useState(0);
  useEffect(() => {
    setCantidadProductos(cart.reduce((acc, {cantidad}) => {
        return acc = acc + (cantidad)
     }, 0))
    }, [cart])

    // Su Carrito se encuentra Vacio
    const [cartLength, setCartLength] = useState(0);
    useEffect (() => {
      let resultado = 0
      for (let itemDelCarrito of cart) {
          resultado += itemDelCarrito.cantidad 
      } 

      return setCartLength(resultado)
  } , [cart]);


  //para tener un estado global
  const values = {
    cart,
    setCart,
    agregarItem,
    estaEnElCart,
    editCart,
    clear,
    deleteItem,
    total,
    cartLength,
    cantidadProductos,
     
  };

  //retorno el context provider y en value le asigno los valores de mi estado global  que fueron declarados arriba
 // Ese cartContex.Provider va a englobar toda la app en (app.js)
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};


export default CartContextProvider;
