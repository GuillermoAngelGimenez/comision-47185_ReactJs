import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../../Components/ItemCart/ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No se agregaron productos al carrito</p>
        <Link to="/">Hacer compra</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}

      <div className="detalle-total">
        <div>
          <p className="total-compra">
            <b>Total: $ {totalPrice()} </b>
          </p>
        </div>

        <div>
          <Link to="/checkout">
            {""}
            <button className="btn btn-success boton-confirmar w-25">
              Confirmar Compra
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
