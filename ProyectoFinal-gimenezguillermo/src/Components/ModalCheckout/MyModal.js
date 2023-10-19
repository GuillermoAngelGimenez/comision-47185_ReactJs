import React from "react";
import "./MyModal.css";
import { Link } from "react-router-dom";

import { useCartContext } from "../../Context/CartContext";

const MyModal = ({ children, isOpen, setIsOpen }) => {
  const { clearCart } = useCartContext();

  return (
    <div>
      <article className={`modal ${isOpen && "is-open"}`}>
        <div className="modal-container">
          <Link
            to="/"
            onClick={() => {
              clearCart();
            }}
          >
            <button className="modal-close btn btn-secondary">Cerrar</button>
          </Link>
          {children}
        </div>
      </article>
    </div>
  );
};

export default MyModal;
