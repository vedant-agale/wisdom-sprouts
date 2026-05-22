// src/components/Product.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 p-3 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="card-img-top mx-auto mt-2" 
          style={{ height: '160px', width: 'auto', objectFit: 'contain' }} 
        />
        <div className="card-body d-flex flex-column mt-3">
          <h6 className="card-title text-truncate fw-bold" title={product.title}>{product.title}</h6>
          
          {/* Modern Price Color */}
          <p className="card-text fw-bold" style={{ color: '#4f46e5', fontSize: '1.2rem' }}>
            ${product.price}
          </p>
          
          <button 
            className="btn w-100 mt-auto text-white fw-semibold"
            style={{ backgroundColor: '#10b981', borderRadius: '8px', border: 'none' }}
            onClick={() => addToCart(product)}
          >
            + Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;