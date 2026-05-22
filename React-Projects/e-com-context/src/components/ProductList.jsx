// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // FakeStore API se asali data laana
    fetch('https://fakestoreapi.com/products?limit=6')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h3 className="mb-4 border-bottom pb-2">Featured Products</h3>
      <div className="row">
        {products.length === 0 ? <p>Loading awesome products...</p> : null}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;