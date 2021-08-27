import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Item = ({ product }) => {
  return (
    <div className = "Item">
      <article className = "ItemArticle">
          <Link to={`/item/${product.id}`}>
              <h5 className = "ItemNombre">{product.nombre}</h5>
          </Link>
              <img
                src={product.img}
                alt={product.nombre}
              />     
              <p>{product.detalleCorto}</p>     
              <p>Precio: ${product.precio}</p>

      </article>
    </div>
  );
};

export default Item;
