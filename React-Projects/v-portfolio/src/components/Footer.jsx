import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-4 border-top border-secondary mt-5" style={{backgroundColor: '#0a0a0a'}}>
      <div className="container text-center">
        <div className="mb-3">
          <a href="https://github.com/VEDANT-AGALE" target="_blank" rel="noreferrer" className="text-white mx-3 fs-4 gold-hover"><FaGithub /></a>
          <a href="#" className="text-white mx-3 fs-4 gold-hover"><FaLinkedin /></a>
          <a href="#" className="text-white mx-3 fs-4 gold-hover"><FaInstagram /></a>
          <a href="mailto:vedantagale2@gmail.com" className="text-white mx-3 fs-4 gold-hover"><FaEnvelope /></a>
        </div>
        <p className="text-dim small mb-0">© 2026 Vedant Agale | Full Stack Software Engineer</p>
      </div>
    </footer>
  );
};

export default Footer;