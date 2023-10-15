import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));
  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

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
              disabled={count <= 1}
              onClick={decrease}
            >
              -
            </button>
            <button type="button" className="btn btn-outline-primary">
              {count}
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              disabled={count >= stock}
              onClick={increase}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col">
          <button
            className="btn btn-outline-primary w-75"
            disabled={stock <= 0}
            onClick={() => onAdd(count)}
          >
            Agregar al carrito
          </button>
        </div>
        <div className="col">
          <Link to={"/"}>
            <button type="button" className="btn btn-outline-primary w-75">
              Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
