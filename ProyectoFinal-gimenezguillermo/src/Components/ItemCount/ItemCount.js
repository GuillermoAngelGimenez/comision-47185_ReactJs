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

  // const toastTrigger = document.getElementById("liveToastBtn");
  // const toastLiveExample = document.getElementById("liveToast");
  // if (toastTrigger) {
  //   toastTrigger.addEventListener("click", () => {
  //     const toast = new bootstrap.Toast(toastLiveExample);

  //     toast.show();
  //   });
  // }

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
            id="agregar-producto"
            className="btn btn-outline-primary w-100"
            disabled={stock <= 0}
            onClick={() => onAdd(count)}
          >
            Agregar al carrito
          </button>

          {/* <div classname="toast-container position-fixed bottom-0 end-0 p-3">
            <div
              id="liveToast"
              classname="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div classname="toast-header">
                <img src="..." classname="rounded me-2" alt="..." />
                <strong classname="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button
                  type="button"
                  classname="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
              <div classname="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div> */}
        </div>
        <div className="col">
          <Link to={"/"}>
            <button type="button" className="btn btn-outline-primary w-100">
              Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
