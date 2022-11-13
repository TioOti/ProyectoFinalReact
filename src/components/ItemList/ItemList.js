import React from "react";
import Item from "../Item/item";

function ItemList({ productos }) {
  return (
    <>
      {productos.map((prod) => <Item key={prod.id} {...prod} />)}
    </>
  );
}

export default ItemList;
