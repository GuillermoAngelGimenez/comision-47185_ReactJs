import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <div className="itemCart">
      <div className="row">
        <div className="col-4">
          <img
            src={product.imagen}
            alt={product.descripcion}
            className="item-cart-img"
          />
        </div>
        <div className="col-8">
          <p>
            Producto: <b>{product.descripcion}</b>
          </p>
          <p>Cantidad: {product.cantidad}</p>
          <p>Precio Unitario: $ {product.precio}</p>
          <p>Subtotal: $ {product.cantidad * product.precio}</p>
          <button
            className="btn btn-info boton-eliminar"
            onClick={() => removeProduct(product.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
