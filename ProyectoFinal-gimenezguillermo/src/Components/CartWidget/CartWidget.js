import React from "react";
import "./CartWidget.css";
import { useCartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { totalProducts, cart } = useCartContext();

  return (
    <div className="carrito">
      {/* <i className="bi-cart-check-fill"></i>
      <span>0</span> */}
      <button type="button" className="btn colorCartButton position-relative">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalProducts() || cart}
        </span>
      </button>
    </div>
  );
};

export default CartWidget;
