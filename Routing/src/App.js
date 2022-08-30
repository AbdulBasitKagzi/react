import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
