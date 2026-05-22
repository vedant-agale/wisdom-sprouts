// src/components/Navbar.jsx
import React, { useContext } from 'react';
import useAuth from '../hooks/useAuth';
import { CartContext } from '../contexts/CartContext';

const Navbar = ({ setShowCart, showCart }) => {
  const { user, login, logout } = useAuth();
  const { cart } = useContext(CartContext);

  const handleLogin = () => {
    login({ name: 'Vedant Agale', email: 'vedant@example.com' });
  };

  return (
    <nav className="navbar shadow-sm px-4 py-3" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
      {/* Click karne par wapas Home par aayega */}
      <h2 
        className="navbar-brand mb-0 fw-bold" 
        style={{ color: '#4f46e5', cursor: 'pointer' }}
        onClick={() => setShowCart(false)}
      >
        🛍️ E-Shop Pro
      </h2>
      
      <div className="d-flex align-items-center gap-4">
        {user ? (
          <div className="d-flex align-items-center gap-3">
            <span className="text-secondary">Hi, <b className="text-dark">{user.name}</b></span>
            <button className="btn btn-sm btn-outline-danger" style={{ borderRadius: '8px' }} onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-sm text-white" style={{ backgroundColor: '#4f46e5', borderRadius: '8px' }} onClick={handleLogin}>
              Login
            </button>
          </div>
        )}

        {/* Dynamic Cart Button */}
        <button 
          className="btn text-white fw-bold d-flex align-items-center gap-2" 
          style={{ backgroundColor: showCart ? '#1f2937' : '#4f46e5', borderRadius: '8px', transition: '0.3s' }}
          onClick={() => setShowCart(!showCart)}
        >
          {showCart ? 'Close Cart' : 'Cart'} 
          <span className="badge bg-light text-dark rounded-pill">{cart.length}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;