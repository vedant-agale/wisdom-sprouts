import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaStar, FaRegStar, FaTrash, FaEdit } from "react-icons/fa";

export default function MovieDetails({ movies, setMovieList }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 1. Movie dhundho
  const movie = movies.find((m) => m.id === parseInt(id));

  // Agar movie nahi mili
  if (!movie) return <h2 className="text-center text-danger mt-5">Movie Not Found!</h2>;

  // 2. Star Rating Logic
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? 
        <FaStar key={i} className="text-warning" style={{ marginRight: '2px' }} /> : 
        <FaRegStar key={i} className="text-secondary" style={{ marginRight: '2px' }} />
      );
    }
    return stars;
  };

  // 🔥 Feature 2: Delete Logic
  const handleDelete = () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${movie.title}"?`);
    if (confirmDelete) {
      const updatedMovies = movies.filter((m) => m.id !== movie.id);
      setMovieList(updatedMovies);
      navigate("/"); // Delete hone ke baad Home par bhej do
    }
  };

  // 🔥 Feature 9: Watchlist Toggle Logic
  const toggleWatchlist = () => {
    const updatedMovies = movies.map(m => 
      m.id === movie.id ? { ...m, inWatchlist: !m.inWatchlist } : m
    );
    setMovieList(updatedMovies);
  };

  return (
    <div className="card shadow border-0 overflow-hidden" style={{ backgroundColor: '#1a1d20' }}>
      
      {/* Header Area */}
      <div className="p-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3" style={{ backgroundColor: '#212529', borderBottom: '2px solid #ffcc00' }}>
        <h3 className="fw-bold m-0 text-center text-md-start" style={{ color: '#ffcc00' }}>
          {movie.title}
        </h3>
        
        {/* Action Buttons (Watchlist, Edit, Delete) */}
        <div className="d-flex flex-wrap justify-content-center gap-2">
          <button 
            onClick={toggleWatchlist} 
            className={`btn btn-sm fw-bold ${movie.inWatchlist ? 'btn-success' : 'btn-outline-success'}`}
          >
            📌 {movie.inWatchlist ? "Added to Watchlist" : "Watch Later"}
          </button>
          
          <Link to={`/edit-movie/${movie.id}`} className="btn btn-sm btn-info text-white fw-bold">
            <FaEdit /> Edit
          </Link>
          
          <button onClick={handleDelete} className="btn btn-sm btn-danger fw-bold">
            <FaTrash /> Delete
          </button>
        </div>
      </div>

      {/* Body Area */}
      <div className="p-4 d-flex flex-column flex-md-row gap-4 align-items-center align-items-md-start">
        {/* Poster */}
        <img 
          src={movie.poster || "https://via.placeholder.com/150x225?text=No+Image"} 
          alt={movie.title} 
          className="rounded shadow"
          style={{ width: '150px', height: '225px', objectFit: 'cover' }}
        />
        
        {/* Description & Rating */}
        <div>
          <p className="fs-5" style={{ color: '#ff6b6b', lineHeight: '1.6' }}>
            {movie.description}
          </p>
          <div className="fs-4 mt-3 mb-2">
            {renderStars(movie.rating)}
          </div>
        </div>
      </div>
      
      {/* Footer Area */}
      <div className="text-center bg-white p-2">
        <Link to="/" className="text-dark fw-bold text-decoration-none" style={{ fontSize: '15px' }}>
          ⬅️ Back to Home
        </Link>
      </div>
      
    </div>
  );
}