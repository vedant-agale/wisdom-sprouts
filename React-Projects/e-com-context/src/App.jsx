// src/App.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  // Ye state decide karegi ki cart open hai ya nahi
  const [showCart, setShowCart] = useState(false);

  return (
    <AuthProvider>
      <CartProvider>
        <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
          {/* Navbar ko toggle function pass kiya */}
          <Navbar setShowCart={setShowCart} showCart={showCart} />
          
          <div className="container py-4">
            {/* Agar showCart true hai toh Cart dikhao, warna Products */}
            {showCart ? <Cart /> : <ProductList />}
          </div>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;