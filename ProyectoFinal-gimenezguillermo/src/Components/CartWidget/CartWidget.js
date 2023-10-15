import React from "react";
import "./CartWidget.css";
import { useCartContext } from "../../Context/CartContext";
import { BsFillCartPlusFill } from "react-icons/bs";

const CartWidget = () => {
  const { totalProducts, cart } = useCartContext();

  return (
    // <div className="carrito">
    <div>
      {/* <button type="button" className="btn colorCartButton position-relative">
        <BsFillCartPlusFill />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalProducts() || cart}
        </span>
      </button> */}

      <div className="carrito">
        <i className="bi-cart-check-fill"></i>
        <span>{totalProducts() || cart}</span>
      </div>
    </div>
  );
};

export default CartWidget;
