import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../../Components/ItemCart/ItemCart";
import "./Cart.css";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="row info-carrito-vacio">
          <div className="col-12">
            <p className="texto-carrito-vacio">
              <b> No se agregaron productos al carrito</b>
            </p>
            <Link to="/">Hacer compra</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}

      <div className="row detalle-total">
        <div className="col-12">
          <p>
            <b>Total: $ {totalPrice()} </b>
          </p>
        </div>
      </div>

      <div className="row detalle-total">
        <div className="col-12">
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
