import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import Header from "./components/Header";
import Edite from "./components/Edite";

import { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [editInput, setEditInput] = useState([]);
  function addProduct(newProduct) {
    let data = JSON.parse(localStorage.getItem("menu")) || [];
    data.push(newProduct);
    localStorage.setItem("menu", JSON.stringify(data));
    redProduct();
  }
  function redProduct() {
    let data = JSON.parse(localStorage.getItem("menu")) || [];
    setData(data);
  }
  function deleteProduct(id) {
    let data = JSON.parse(localStorage.getItem("menu")) || [];
    let deleteData = data.filter((el) => el.id !== id);
    localStorage.setItem("menu", JSON.stringify(deleteData));
    redProduct();
  }
  function editeInput(index) {
    setEditInput(data[index]);
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/admin" element={<Admin addProduct={addProduct} />} />
        <Route
          path="/menu"
          element={
            <Menu
              redProduct={redProduct}
              data={data}
              deleteProduct={deleteProduct}
              editeInput={editeInput}
            />
          }
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/edite/:id" element={<Edite />} />
      </Routes>
    </div>
  );
}

export default App;
