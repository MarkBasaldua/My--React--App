import React from 'react';

function Product({ name, price, description }) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p><strong>${price}</strong></p>
    </div>
  );
}

export default Product;
