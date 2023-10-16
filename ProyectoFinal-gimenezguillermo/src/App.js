import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

import Error404 from "./Components/Error404";
import ComoComprar from "./Components/ComoComprar";
import Ayuda from "./Components/Ayuda";

import CartProvider from "./Context/CartContext";
import Cart from "./Components/Cart/Cart";
import { Checkout } from "./Components/Checkout/Checkout";

import "./App.css";

function App() {
  return (
    <div>
      {/* <div className="App"> */}
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/comoComprar"} element={<ComoComprar />} />
            <Route path={"/ayuda"} element={<Ayuda />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
