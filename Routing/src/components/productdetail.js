import React from "react";
import { useParams } from "react-router-dom";

function Productdetail() {
  const params = useParams();
  return (
    <div>
      <p>Detail of the product</p>
      <p>{params.id}</p>
    </div>
  );
}

export default Productdetail;
