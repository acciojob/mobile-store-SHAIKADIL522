import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => (
  <div className="grid">
    {products.map((p) => (
      <Link key={p.id} to={`/products/${p.id}`} className="card">
        <img src={p.image} alt={p.name} />
        <div className="info">
          <h4>{p.name}</h4>
          <p>Price: {p.price}</p>
          <div className="buy">Buy</div>
        </div>
      </Link>
    ))}
  </div>
);

export default ProductList;