import React from "react";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayAutos from "../../Json/arrayAutos1.json";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(
              id
                ? arrayAutos.filter((item) => item.categoria === id)
                : arrayAutos
            );
          }, 2000);
        });
        setItem(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container contenedor-cards">
      <div className="row">
        <ItemList item={item} />
      </div>
    </div>
  );
};

export default ItemListContainer;
