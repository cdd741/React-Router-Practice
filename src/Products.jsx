import React, { useState } from "react";
import products from "./data/products.json";
import { Link } from "react-router-dom";

function Products() {
  const [category, setCategory] = useState("all");

  const handleOnClick = (category) => {
    setCategory(category);
  };

  return (
    <div>
      <h1>Products</h1>
      <p>check out our many products below!</p>
      <a
        href="#"
        onClick={() => {
          handleOnClick("all");
        }}
      >
        All
      </a>
      <a
        href="#"
        onClick={() => {
          handleOnClick("electronics");
        }}
      >
        Electronics
      </a>
      <a
        href="#"
        onClick={() => {
          handleOnClick("gadgets");
        }}
      >
        Gadgets
      </a>
      <ul>
        {products
          .filter(
            (product) => category === "all" || product.category === category
          )
          .map((product) => (
            <li key={product.id}>
              <Link to={`/${product.id}`}>{product.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Products;
