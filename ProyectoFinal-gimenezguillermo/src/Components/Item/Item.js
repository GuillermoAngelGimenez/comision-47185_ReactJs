import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id} className="text-decoration-none">
      <div className="container card-esp">
        <div className="card border border-2 card-ind">
          <img
            src={item.imagen}
            className="card-img-top card-body-img"
            alt={item.marca}
          />
          <div className="card-body text-center">
            <p className="card-text-marca">
              <b>{item.marca}</b>
            </p>
            <p className="card-text">
              <b>{item.descripcion}</b>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
