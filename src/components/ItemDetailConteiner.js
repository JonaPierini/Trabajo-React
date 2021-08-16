import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { database } from "../firebase/config";

const ItemDetailContainer = () => {
  //id que me manda por parametros en url
  const { id } = useParams();

  //guardo mi producto buscado con find
  const [producto, setProducto] = useState({});

  useEffect(() => {
    setProducto({});
    const productosDeDB = database.collection("peliculas").doc(id);

    productosDeDB.get().then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <>
      {Object.entries(producto).length !== 0 ? (
        <ItemDetail producto={producto} />
      ) : (
        <h2>Cargando...</h2>
      )}
    </>
  );
};

export default ItemDetailContainer;
