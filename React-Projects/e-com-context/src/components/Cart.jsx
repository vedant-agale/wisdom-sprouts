// src/components/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-5 mb-5 bg-light p-4 rounded shadow-sm">
      <h3 className="mb-4">Your Shopping Cart</h3>
      
      {cart.length === 0 ? (
        <p className="text-muted">Cart is empty. Add some products!</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            // Note: Use a unique key. If duplicate products can be added, index is a fallback.
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <img src={item.image} alt={item.title} style={{ width: '30px' }} />
                <span className="text-truncate" style={{ maxWidth: '400px' }}>{item.title}</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span className="fw-bold text-success">${item.price}</span>
                <button 
                  className="btn btn-sm btn-danger" 
                  onClick={() => removeFromCart(item.id)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;