import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";

import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc
} from "firebase/firestore";
import "./Checkout.css";
import MyModal from "../ModalCheckout/MyModal";

export const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");
  // const [mensaje, setMensaje] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const { cart, removeProduct, totalPrice } = useCartContext();

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los correos ingresados no coinciden");
      return;
    }

    const total = totalPrice();
    const orden = {
      items: cart.map((producto) => ({
        id: producto.id,
        nombre: producto.descripcion,
        cantidad: producto.cantidad
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const db = getFirestore();
        const productoRef = doc(db, "products", productoOrden.id);

        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad
        });
      })
    )
      .then(() => {
        const db = getFirestore();
        addDoc(collection(db, "orders"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            removeProduct();
          })
          .catch((error) => {
            console.log("Error en creacon de orden", error);
            setError("Error en orden");
          });
      })
      .catch((error) => {
        console.log("No se puede actualizar el stock", error);
        setError("No se actualizo el stock");
      });

    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
    setEmailConfirmacion("");
    // setMensaje("");
  };

  return (
    <>
      <div className="form-envio">
        <h2 className="info">
          Rellena el formulario y nos contactaremos para enviar sus productos
        </h2>

        <form onSubmit={manejadorFormulario}>
          <h4>Productos seleccionados:</h4>
          {cart.map((producto) => (
            <div className="item-check" key={producto.id}>
              <div>
                <ul>
                  <li className="form-envio-seleccionados">
                    <p>
                      {"*** "}
                      {producto.descripcion} * {producto.cantidad} unid.
                    </p>
                    <p>
                      <b>${producto.precio} </b> (precio unit.)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          ))}

          <div className="form-group row">
            <label className="lab-check col-sm-4 col-form-label">
              Nombre:{" "}
            </label>
            <input
              className="input-check col-sm-4"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="form-group row">
            <label className="lab-check col-sm-4 col-form-label">
              Apellido:{" "}
            </label>
            <input
              className="input-check col-sm-4"
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>

          <div className="form-group row">
            <label className="lab-check col-sm-4 col-form-label">
              Teléfono:{" "}
            </label>
            <input
              className="input-check col-sm-4"
              type="number"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <div className="form-group row">
            <label className="lab-check col-sm-4 col-form-label">Email: </label>
            <input
              className="input-check col-sm-4"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group row">
            <label className="lab-check col-sm-4 col-form-label">
              Email Confirmación:{" "}
            </label>
            <input
              className="input-check col-sm-4"
              type="email"
              value={emailConfirmacion}
              onChange={(e) => setEmailConfirmacion(e.target.value)}
            />
          </div>

          {error && <p className="error-campos">{error}</p>}

          {ordenId && (
            <MyModal isOpen={() => setIsOpen(true)}>
              <h5>La operación se completo con éxito</h5>
              <hr />
              <p className="orden">
                <b>
                  ¡Gracias por tu compra! <br /> Este es tu numero de orden:{" "}
                  <br /> {ordenId}{" "}
                </b>
              </p>
            </MyModal>
          )}

          <div className="checking">
            <button
              onClick={() => setIsOpen(true)}
              className="check-bt btn btn-primary w-25"
              type="submit"
            >
              Finalizar Compra
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
