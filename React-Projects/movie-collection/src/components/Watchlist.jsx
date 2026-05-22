import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function Watchlist({ movies, setMovieList }) {
  // Sirf wahi movies dikhao jisme inWatchlist true hai
  const watchlistMovies = movies.filter(m => m.inWatchlist);

  const removeFromWatchlist = (id) => {
    const updatedMovies = movies.map(m => m.id === id ? { ...m, inWatchlist: false } : m);
    setMovieList(updatedMovies);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <FaStar key={i} className="text-warning" style={{ marginRight: '2px' }} /> : <FaRegStar key={i} className="text-secondary" style={{ marginRight: '2px' }} />);
    }
    return stars;
  };

  return (
    <div className="card shadow border-0 p-4">
      <h2 className="text-center fw-bold mb-4 text-danger">📌 My Watchlist</h2>
      
      <div className="d-flex flex-column gap-3 mb-4">
        {watchlistMovies.length === 0 ? (
          <div className="text-center mt-4">
            <p className="text-muted fs-5">Your Watchlist is totally empty.</p>
            <Link to="/" className="btn btn-outline-danger mt-2">Go find some movies!</Link>
          </div>
        ) : (
          watchlistMovies.map((movie) => (
            <div key={movie.id} className="p-3 bg-secondary bg-opacity-10 d-flex justify-content-between align-items-center rounded shadow-sm">
              <div className="d-flex align-items-center gap-3">
                <img src={movie.poster || "https://via.placeholder.com/50x75?text=No+Image"} alt="poster" width="50" height="75" style={{ objectFit: 'cover', borderRadius: '5px' }} />
                <Link to={`/movie/${movie.id}`} className="text-decoration-none fw-bold fs-5 text-primary">
                  {movie.title}
                </Link>
              </div>
              <div className="text-end">
                <button className="btn btn-sm btn-danger mb-2" onClick={() => removeFromWatchlist(movie.id)}>Remove ❌</button>
                <div>{renderStars(movie.rating)}</div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="text-center">
        <Link to="/" className="btn btn-dark fw-bold px-4 shadow-sm">Back to Home</Link>
      </div>
    </div>
  );
}