// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top classy-nav">
      <div className="container">
        <Link className="navbar-brand logo" to="/">
          VEDANT<span className="gold-dot">.</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
<li className="nav-item">
    <a href="/Vedant_Agale_Resume.pdf" download className="nav-link text-white">
        DOWNLOAD CV
    </a>
</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;