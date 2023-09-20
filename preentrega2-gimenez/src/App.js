import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComoComprar from "./Components/ComoComprar";
import Ayuda from "./Components/Ayuda";
import CartWidget from "./Components/CartWidget/CartWidget";
import Error from "./Components/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/comoComprar" element={<ComoComprar />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
