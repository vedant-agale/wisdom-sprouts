// src/pages/MovieList.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaSearch } from 'react-icons/fa';

const MovieList = ({ movies }) => {
  // SEARCH STATE: User jo type karega wo yahan save hoga
  const [searchTerm, setSearchTerm] = useState('');

  // SEARCH LOGIC: Movies ko filter karna (Case insensitive)
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to render 5 stars
  const renderStars = (rating) => {
    return [...Array(5)].map((star, index) => {
      return (
        <FaStar 
          key={index} 
          className={index < rating ? "text-gold fs-5" : "text-secondary fs-5"} 
        />
      );
    });
  };

  return (
    <div>
      <h2 className="text-center text-gold mb-4 mt-2">Movie Collection</h2>
      
      {/* 🔍 PREMIUM SEARCH BAR */}
      <div className="mb-4 position-relative">
        <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary">
          <FaSearch />
        </span>
        <input 
          type="text" 
          className="form-control bg-dark text-white border-secondary ps-5 py-2" 
          placeholder="Search movies by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* CONDITIONAL RENDERING FOR LIST */}
      {movies.length === 0 ? (
        <div className="text-center mt-5">
          <p className="fs-5">Your vault is empty! 🍿</p>
          <Link to="/add-movie" className="btn btn-gold mt-2">Add Your First Movie</Link>
        </div>
      ) : filteredMovies.length === 0 ? (
        <div className="text-center mt-5 text-warning">
          <p className="fs-5">No movies found matching "{searchTerm}" 🧐</p>
        </div>
      ) : (
        <div className="d-flex flex-column gap-3">
          {filteredMovies.map((movie) => (
            <Link 
              to={`/movie/${movie.id}`} 
              key={movie.id} 
              className="movie-row p-3 rounded d-flex justify-content-between align-items-center shadow-sm"
            >
              <h5 className="mb-0">{movie.title}</h5>
              <div>{renderStars(movie.rating)}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;