import { Route, Routes, NavLink } from "react-router-dom";
import Product from "./components/Product";
import Welcome from "./components/Welcome";

import classes from "./App.module.css";
import Productdetail from "./components/productdetail";

function App() {
  return (
    <div>
      <NavLink to="/welcome">Welcome</NavLink>
      <h2>Let's get started!</h2>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Productdetail />} />
      </Routes>
    </div>
  );
}

export default App;
