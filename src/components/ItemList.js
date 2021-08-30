import { useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { database } from "../firebase/config";
import "../App.css"

const ItemListContainer = () => {
  const [peliculas, setPeliculas] = useState([]);
  const { id: idCategory } = useParams();

  useEffect(() => {
    setPeliculas([]);
    const productosDataBase = database.collection("peliculas");
    if (idCategory) {
      productosDataBase
        .where("categoria", "==", idCategory)
        .get()
        .then((query) =>
          setPeliculas(
            query.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
          )
        );
    } else {
      productosDataBase.get().then((query) =>
        setPeliculas(
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
      {peliculas.length ? (
        peliculas.map((peli) => (
          <Item key={peli.id} product={peli} />
        ))
      ) : (
        <h3>Cargando...</h3>
      )}
    </div>
  </>
  );
};
export default ItemListContainer;
