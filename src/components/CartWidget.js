import React from 'react'
import { Link } from "react-router-dom";
 


const CartWidget = () => {
     
  
    return (
         
        <>
        <Link to="/cart">
        <img className = "ImagenCarrito" src = "https://image.flaticon.com/icons/png/512/3144/3144456.png" alt = "ImagenCarrito"></img>
        </Link>
        </>
       
    )


};

export default CartWidget;