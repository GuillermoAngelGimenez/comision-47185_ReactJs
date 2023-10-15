import React from "react";
import { useParams } from "react-router-dom";

const ProductosId = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>Este Producto tiene el id: {id}</h3>
    </div>
  );
};

export default ProductosId;
