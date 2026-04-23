// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Animation ke liye
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
        
        {/* Fade-in Animation for Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-gold mb-3 text-uppercase tracking-widest fw-semibold">
            Scalable Solutions • Modern Architecture
          </h4>
          <h1 className="display-1 fw-bold mb-4 text-white">Vedant Agale</h1>
          <p className="lead text-dim w-75 mx-auto mb-5">
            <strong>Java Full Stack & MERN Developer.</strong> architecting high-performance 
            web applications with a focus on clean code and enterprise logic.
          </p>
          
          <div className="mt-2">
            <Link to="/projects" className="btn btn-gold px-5 py-3 text-decoration-none">
                EXPLORE PROJECTS
            </Link>
          </div>
        </motion.div>

        {/* 🖱️ Classy Scroll Down Indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p className="text-gold small mt-2 tracking-widest">SCROLL</p>
        </motion.div>

      </section>
    </div>
  );
}

export default Home;