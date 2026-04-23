// App.jsx - Updated Paths
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components (Ab ye components folder se aayenge)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages (Ab ye pages folder se aayenge)
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;