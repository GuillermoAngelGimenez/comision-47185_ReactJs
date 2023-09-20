import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="container detalle-item-padre">
      <div>
        <img src={item.imagen} className="img-fluid" alt={item.marca} />
        <h2>{item.marca}</h2>
        <p>{item.descripcion}</p>
        <p>{item.año}</p>
        <p> $ {item.precio}</p>
        <p> Cantidad: {item.stock}</p>
      </div>
      <div>
        <ItemCount stockItems={10} />
      </div>
    </div>
  );
};

export default ItemDetail;
