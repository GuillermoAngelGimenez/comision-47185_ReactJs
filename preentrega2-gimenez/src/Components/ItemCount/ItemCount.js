import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stockItems }) => {
  const [counter, setCounter] = useState(1);
  const [stock, setStock] = useState(stockItems);

  const incrementarStock = () => {
    console.log({ counter });
    console.log({ stock });
    if (counter < stockItems) {
      setCounter(counter + 1);
    }
  };

  const decrementarStock = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container" id="itemcount">
      <div className="row mb-2 mt-3 d-flex justify-content-center">
        <div className="col-md-4">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={decrementarStock}
            >
              -
            </button>
            <button type="button" className="btn btn-outline-primary">
              {counter}
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={incrementarStock}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col">
          <button type="button" className="btn btn-outline-primary w-75">
            Agregar al carrito
          </button>
        </div>
        <div className="col">
          <Link to={"/"}>
            <button type="button" className="btn btn-secondary w-75">
              Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
