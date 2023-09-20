import React from "react";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="carrito">
      <i className="bi-cart-check-fill"></i>
      <span>0</span>
    </div>
  );
};

export default CartWidget;
