import React from "react";

const ItemCount = ({ initial, stock, contador, setContador }) => {
  const handleClick = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleClickResta = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <button  onClick={handleClickResta}>
        -
      </button>
      <p>{contador}</p>
      <button onClick={handleClick}>
        +
      </button>
    </div>
  );
};

export default ItemCount;