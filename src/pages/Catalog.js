import React from 'react';
import Product from '../components/Product';

function Catalog() {
  const products = [
    { name: 'Product 1', price: 29.99, description: 'This is product 1' },
    { name: 'Product 2', price: 39.99, description: 'This is product 2' },
    { name: 'Product 3', price: 49.99, description: 'This is product 3' }
  ];

  return (
    <div>
      <h1>Catalog</h1>
      <div className="catalog">
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
