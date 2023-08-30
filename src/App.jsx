import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/Navbar/NavBar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* muestra todos los productos */}
        <Route path="/" element={<ItemListContainer />} />

        {/* muestra los productos de una categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;