import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos al E-Commerce" />
    </div>
  );
}

export default App;
