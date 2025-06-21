import React from "react";

const ProductInfo = () => {
  const product = { name: "Laptop", price: 1200, availability: true };
  return (
    <div>
      <h1>Product Info</h1>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Availability: {product.availability ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export default ProductInfo;
