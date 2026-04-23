import React from 'react';
import { projects } from '../projectList';
import './Projects.css';

const Projects = () => {
  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h2 className="display-4 text-gold mb-2">Curated Works</h2>
        <p className="text-dim">A collection of web development and cinematic projects.</p>
      </div>

      <div className="row g-4">
        {projects.map((proj) => (
          <div className="col-md-6 col-lg-4" key={proj.id}>
            <div className="card h-100 project-card border-0 bg-card shadow-lg">
              <div className="card-img-container">
                {/* Default image placeholder if none exists */}
                <img 
                  src={proj.image || "https://picsum.photos/seed/" + proj.id + "/600/400"} 
                  className="card-img-top" 
                  alt={proj.title} 
                />
                <div className="category-badge">{proj.category}</div>
              </div>
              <div className="card-body p-4 d-flex flex-column">
                <h4 className="text-gold mb-3">{proj.title}</h4>
                <p className="text-dim small flex-grow-1">{proj.description}</p>
                <div className="mt-4">
                  <a href={proj.link} target="_blank" rel="noreferrer" className="text-decoration-none gold-link">
                    Explore Project <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;