import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container pt-5">
      <section className="hero py-5 text-center">
        <h4 className="text-gold mb-3 text-uppercase tracking-widest">Building Scalable Solutions</h4>
        <h1 className="display-1 fw-bold mb-4">Vedant Agale</h1>
        <p className="lead text-dim w-75 mx-auto">
          <strong>Java Full Stack & MERN Developer.</strong> Specialized in building high-performance 
          web applications with Spring Boot, React, and Modern JavaScript.
        </p>
        <div className="mt-5">
            <Link to="/projects" className="btn btn-gold px-5 py-3 text-decoration-none">
                EXPLORE PROJECTS
            </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;