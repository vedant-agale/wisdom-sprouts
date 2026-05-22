// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm mb-4">
      <div className="container">
        <Link className="navbar-brand fw-bold text-gold" to="/">
          🎬 MovieVault
        </Link>
        <div>
          <Link to="/" className="btn btn-outline-light btn-sm me-2">Home</Link>
          <Link to="/add-movie" className="btn btn-gold btn-sm">+ Add Movie</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;