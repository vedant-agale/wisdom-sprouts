// src/pages/AddMovie.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = ({ setMovieList }) => {
  // Form ke inputs handle karne ke liye state
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  
  // Submit karne ke baad wapas Home page par bhejne ke liye
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Page refresh hone se rokne ke liye
    
    // Naya movie object banana
    const newMovie = {
      id: Date.now(), // Unique ID ke liye
      title: title,
      rating: parseInt(rating), // Rating number mein honi chahiye
      description: description
    };

    // Nayi movie ko existing list mein add karna
    setMovieList((prevList) => [...prevList, newMovie]);
    
    // Home page par redirect karna
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card text-white bg-dark border-secondary shadow">
            <div className="card-header border-secondary text-center">
              <h3 className="text-gold mb-0">Add New Movie</h3>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                
                {/* Title Input */}
                <div className="mb-3">
                  <label className="form-label text-gold">Movie Title</label>
                  <input 
                    type="text" 
                    className="form-control bg-dark text-white border-secondary" 
                    placeholder="Enter movie name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required 
                  />
                </div>

                {/* Rating Input */}
                <div className="mb-3">
                  <label className="form-label text-gold">Rating (1 to 5)</label>
                  <input 
                    type="number" 
                    className="form-control bg-dark text-white border-secondary" 
                    placeholder="Enter rating (1-5)"
                    min="1" 
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required 
                  />
                </div>

                {/* Description Input */}
                <div className="mb-4">
                  <label className="form-label text-gold">Description</label>
                  <textarea 
                    className="form-control bg-dark text-white border-secondary" 
                    rows="4" 
                    placeholder="What is the movie about?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required 
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between">
                  <button 
                    type="button" 
                    className="btn btn-outline-light" 
                    onClick={() => navigate('/')}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-gold px-4">
                    Add Movie
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;