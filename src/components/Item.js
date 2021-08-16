import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Item = ({ product }) => {
  return (
    <>
    <div className = "Item">
        <Link to={`/item/${product.id}`}>
            <h5>{product.nombre}</h5>
            <img
              src={product.img}
              alt={product.nombre}
            />
          
          </Link>
            <p>${product.precio}</p>
    </div>
    </>
  );
};

export default Item;
