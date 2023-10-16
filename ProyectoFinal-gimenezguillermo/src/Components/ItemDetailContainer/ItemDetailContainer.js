import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import arrayAutos from "../../Json/arrayAutos1.json";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, "products", id);
    getDoc(queryDoc).then((res) => setItem({ id: res.id, ...res.data() }));
  }, [id]);

  // simulacion de tiempo de carga
  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
