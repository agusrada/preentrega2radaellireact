import { Routes, Route} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailcontainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return(
    <div>
      
      <NavBar/>

      
      <ItemListContainer greeting ="Nuestros Cortes" />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:id" element={<ItemListContainer/>}></Route>
        <Route path="/item/:id" element={<ItemDetailcontainer/>}></Route>

      </Routes>
    </div>
  );
};

export default App
