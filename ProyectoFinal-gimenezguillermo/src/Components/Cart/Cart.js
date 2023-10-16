import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: "Guillermo Gimenez",
      email: "angel_gag@hotmail.com",
      phone: "3512558162",
      address: "boulevard San Juan 357"
    },
    items: cart.map((product) => ({
      id: product.id,
      descripcion: product.descripcion,
      precio: product.precio,
      cantidad: product.cantidad
    })),
    total: totalPrice()
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

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
          <button
            className="btn btn-success boton-confirmar w-25"
            onClick={handleClick}
          >
            Confirmar Compra
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
