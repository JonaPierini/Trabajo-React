//importo los elementos necesarios para crear mi estado
import React, { createContext, useState, useEffect} from "react";

//creo mi Contexto para ser usado en cualquier componente
//genero un export const porque lo tengo que importar cada vez que lo quiera usar
export const CartContext = createContext();

//creo mi componente que va a contener mi estado global, el cual sera utilizado en App.js
const CartContextProvider = ({ children }) => {
  //este useState se va a transformar en mi estado global
  const [cart, setCart] = useState([]);
  console.log(cart);
  //funciones que modificaran el cart
  //aagrega al carrito
  const addItem = (item) => {
    setCart([...cart, item]);
  };



  //ver si esta en el carrito
  const isInCart = (id) => {
    const verificar = cart.filter((item) => item.id === id);
    return verificar.length > 0;
  };

  //funcion para editar la cantidad si ya se encuentra
  const editCart = (itemEditado) => {
    const editado = cart.map((item) =>
      item.id === itemEditado.id ? itemEditado : item
    );
    setCart(editado);
  };

  //funcion para limpiar todo el carrito //
  const clear = () => {
    setCart([]);
  };

  //funcion para remover un Item del carrito
  const deleteItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };


  // total
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, {cantidad, precio}) => {
        return acc = acc + (precio * cantidad)
     }, 0))
    }, [cart])

  


  //creo un objeto para ir agregando todo lo que quiera tener en mi estado global
  //puedo pasar array, objetos o funciones
  const values = {
    cart,
    setCart,
    addItem,
    isInCart,
    editCart,
    clear,
    deleteItem,
    total,
     
  };

  //retorno el context provider y en value le asigno los valores de mi estado global
  //que quiero dale a mi app
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

//exporto mi context para poder usar en App.js
export default CartContextProvider;
