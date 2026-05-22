// src/pages/MovieDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const MovieDetails = ({ movies, setMovieList }) => {
  // URL se ID nikalne ke liye useParams
  const { id } = useParams();
  const navigate = useNavigate();

  // ID ke base par array me se sahi movie dhoondhna
  // Note: URL param hamesha string hota hai, isliye Number(id) kiya hai
  const movie = movies.find((m) => m.id === Number(id));

  // Agar user galat URL daal de toh
  if (!movie) {
    return (
      <div className="text-center mt-5">
        <h2 className="text-danger">Movie Not Found! 🎬❌</h2>
        <button className="btn btn-outline-light mt-3" onClick={() => navigate('/')}>
          Go to Home
        </button>
      </div>
    );
  }

  // Star Rating Render Logic
  const renderStars = (rating) => {
    return [...Array(5)].map((star, index) => (
      <FaStar 
        key={index} 
        className={index < rating ? "text-gold fs-4" : "text-secondary fs-4"} 
      />
    ));
  };

  // PREMIUM FEATURE: Delete Movie Logic
  const handleDelete = () => {
    // Browser ka default confirmation popup
    if (window.confirm(`Are you sure you want to delete "${movie.title}"?`)) {
      // Jo movie delete karni hai, usko chhod kar baaki sab filter kar lo
      const updatedList = movies.filter((m) => m.id !== movie.id);
      setMovieList(updatedList); // State aur LocalStorage update ho jayega
      navigate('/'); // Wapas home par bhej do
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card bg-dark text-white border-secondary shadow-lg">
            
            {/* Header: Title & Stars */}
            <div className="card-header border-secondary d-flex justify-content-between align-items-center p-4">
              <h2 className="text-gold mb-0">{movie.title}</h2>
              <div>{renderStars(movie.rating)}</div>
            </div>
            
            {/* Body: Description */}
            <div className="card-body p-4">
              <h5 className="text-muted mb-3">Plot Summary:</h5>
              <p className="fs-5" style={{ lineHeight: '1.6' }}>
                {movie.description}
              </p>
            </div>
            
            {/* Footer: Action Buttons */}
            <div className="card-footer border-secondary bg-dark d-flex justify-content-between p-3">
              <button 
                className="btn btn-outline-light px-4" 
                onClick={() => navigate('/')}
              >
                ← Back to List
              </button>
              
              <button 
                className="btn btn-danger px-4" 
                onClick={handleDelete}
              >
                Delete Movie 🗑️
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;