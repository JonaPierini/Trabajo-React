import { useEffect, useState } from "react";
import Item from "./Item";
import { Link, useParams } from "react-router-dom";
import { database } from "../firebase/config";
import "../App.css"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id: idCategory } = useParams();

  useEffect(() => {
    setProductos([]);
    const productosDeDB = database.collection("peliculas");
    if (idCategory) {
      productosDeDB
        .where("categoria", "==", idCategory)
        .get()
        .then((query) =>
          setProductos(
            query.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
          )
        );
    } else {
      productosDeDB.get().then((query) =>
        setProductos(
          query.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        )
      );
    }
  }, [idCategory]);

  return (
    <>
    <div>
      {productos.length ? (
        productos.map((product) => (
          <Item key={product.id} product={product} />
        ))
      ) : (
        <h3>Cargando...</h3>
      )}
    </div>
  </>
  );
};
export default ItemListContainer;
