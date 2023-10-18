import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

import { toast } from "react-toastify";

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();
  const onAdd = (cantidad) => {
    setGoToCart(true);
    addProduct(item, cantidad);

    toast.success("Se agrego el producto al carrito", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        background: "black",
        color: "white"
      }
    });
  };

  return (
    <div className="container detalle-item-padre">
      <div>
        <img
          src={item.imagen}
          className="item-detail-imagen"
          alt={item.marca}
        />
        <h2>{item.marca}</h2>
        <p className="item-detail-descripcion">{item.descripcion}</p>
        <p>{item.año}</p>
        <p> $ {item.precio}</p>
        <p> Cantidad: {item.stock}</p>
      </div>
      <div className="item-detail-terminar">
        {goToCart ? (
          <Link to="/cart">Terminar compra</Link>
        ) : (
          <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
