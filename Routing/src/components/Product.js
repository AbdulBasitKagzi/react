import React from "react";
import { NavLink } from "react-router-dom";

function Product() {
  return (
    <div>
      <h3>Products are here</h3>

      <ul>
        <li>
          <NavLink to="/product/:id">product1</NavLink>
        </li>

        <li>product2</li>

        <li>product3</li>
      </ul>
    </div>
  );
}

export default Product;
