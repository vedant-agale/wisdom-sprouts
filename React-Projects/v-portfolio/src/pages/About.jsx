import React from 'react';

const About = () => {
  return (
    <div className="container py-5 mt-5">
      <div className="row">
        <div className="col-lg-7">
          <h2 className="display-4 text-gold mb-4">Professional Journey</h2>
          <p className="text-white lead">Computer Engineering student specializing in scalable Full-Stack architectures.</p>
          
          <div className="mt-5">
            <h4 className="text-gold border-bottom border-secondary pb-2 mb-4">Experience</h4>
            
            {/* Internship 1: Scalefull Technologies */}
            <div className="mb-5 border-start border-gold ps-4">
              <h5 className="text-white">Intern Software Engineer (MERN Stack)</h5>
              <p className="text-gold mb-1">Scalefull Technologies, Pune | Jan 2026 - Present</p>
              <p className="text-dim small">Working with the development team on scalable MERN applications, focusing on high-performance standards and corporate-academic excellence.</p>
            </div>

            {/* Internship 2: HUSYS */}
            <div className="mb-5 border-start border-secondary ps-4">
              <h5 className="text-white">Internship Trainee (Java Full Stack)</h5>
              <p className="text-gold mb-1">HUSYS, Bangalore (Remote) | Dec 2025 - Present</p>
              <p className="text-dim small">Developed real-time enterprise applications using Java, Spring Boot, and MySQL. Gained hands-on experience in RESTful API development and database optimization.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 offset-lg-1 bg-card p-4 rounded-4 shadow-lg h-100 mt-5 mt-lg-0">
          <h4 className="text-gold mb-4">Technical Stack</h4>
          <div className="mb-3">
            <span className="badge border border-gold text-gold m-1">Java</span>
            <span className="badge border border-gold text-gold m-1">Spring Boot</span>
            <span className="badge border border-gold text-gold m-1">React.js</span>
            <span className="badge border border-gold text-gold m-1">Node.js</span>
            <span className="badge border border-gold text-gold m-1">MongoDB</span>
            <span className="badge border border-gold text-gold m-1">MySQL</span>
            <span className="badge border border-gold text-gold m-1">JavaScript (ES6+)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;