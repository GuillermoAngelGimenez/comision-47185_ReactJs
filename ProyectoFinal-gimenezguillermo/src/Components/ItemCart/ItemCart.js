import React from "react";
import { useCartContext } from "../../Context/CartContext";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <div className="itemCart">
      <img src={product.imagen} alt={product.descripcion} />
      <div>
        <p>Producto: {product.descripcion}</p>
        <p>Cantidad: {product.cantidad}</p>
        <p>Precio Unitario: $ {product.precio}</p>
        <p>Subtotal: $ {product.cantidad * product.precio}</p>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
