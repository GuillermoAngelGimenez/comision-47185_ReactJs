import React from "react";
import "./CartWidget.css";
import { useCartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { totalProducts, cart } = useCartContext();

  return (
    <div>
      <div className="carrito">
        <i className="bi-cart-check-fill"></i>
        <span>{totalProducts() || cart}</span>
      </div>
    </div>
  );
};

export default CartWidget;
