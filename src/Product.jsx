import React, { useState } from "react";
import productList from "./data/products.json";

function Product({ match }) {
  // set 'show' as a state, use setShow() to change the value of state 'show'
  const [show, setShow] = useState(false);

  const handleOnClick = () => {
    // here is how I change the state
    setShow(!show);
  };

  const product = productList.find(
    (product) => Number(product.id) === Number(match.params.id)
  );

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Product ID: {product.id}</p>
      <p>Categoty: {product.category}</p>
      <a href="#" onClick={handleOnClick}>
        See technical sepecifications
      </a>
      {show && (
        <div>
          <h1>Technical specifications</h1>
          <p>{product.technicalSpecs}</p>
        </div>
      )}
    </div>
  );
}

export default Product;
