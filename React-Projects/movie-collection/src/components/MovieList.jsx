import React, { useState } from "react";
import { Link } from "react-router-dom";
// 🔥 Heart Icons import kar rahe hain
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";

export default function MovieList({ movies, setMovieList }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [filterRating, setFilterRating] = useState("All");
  const [showFavorites, setShowFavorites] = useState(false); // 🔥 Favorite toggle

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <FaStar key={i} className="text-warning" style={{ marginRight: '2px' }} /> : <FaRegStar key={i} className="text-light" style={{ marginRight: '2px' }} />);
    }
    return stars;
  };

  // 🔥 Heart icon par click karne ka logic
  const toggleFavorite = (id) => {
    const updatedMovies = movies.map(m => m.id === id ? { ...m, isFavorite: !m.isFavorite } : m);
    setMovieList(updatedMovies); // State aur LocalStorage update
  };

  // Filtering & Sorting
  let processedMovies = [...movies];
  processedMovies = processedMovies.filter((m) => m.title.toLowerCase().includes(search.toLowerCase()));
  if (filterRating !== "All") processedMovies = processedMovies.filter((m) => m.rating === parseInt(filterRating));
  if (showFavorites) processedMovies = processedMovies.filter((m) => m.isFavorite); // 🔥 Favorite Filter
  
  if (sortBy === "title") processedMovies.sort((a, b) => a.title.localeCompare(b.title));
  else if (sortBy === "ratingHigh") processedMovies.sort((a, b) => b.rating - a.rating);
  else if (sortBy === "ratingLow") processedMovies.sort((a, b) => a.rating - b.rating);

  return (
    <div className="card shadow border-0 p-4" style={{ backgroundColor: '#fdfdfd' }}>
      <h2 className="text-center fw-bold mb-4" style={{ color: '#ffcc00' }}>Movie List</h2>

      {/* 🔍 Search Bar & Favorite Toggle Button */}
      <div className="d-flex gap-2 mb-3">
        <input type="text" className="form-control shadow-sm" placeholder="🔍 Search movies..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <button 
          className={`btn fw-bold shadow-sm ${showFavorites ? 'btn-danger' : 'btn-outline-danger'}`} 
          onClick={() => setShowFavorites(!showFavorites)}
          style={{ minWidth: '160px' }}
        >
          {showFavorites ? "❤️ Show All" : "❤️ Favorites"}
        </button>
      </div>

      <div className="row g-2 mb-4">
        <div className="col-md-6">
          <select className="form-select shadow-sm" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Sort: Default</option>
            <option value="title">Sort: Title (A-Z)</option>
            <option value="ratingHigh">Sort: Rating (High to Low)</option>
            <option value="ratingLow">Sort: Rating (Low to High)</option>
          </select>
        </div>
        <div className="col-md-6">
          <select className="form-select shadow-sm" value={filterRating} onChange={(e) => setFilterRating(e.target.value)}>
            <option value="All">Filter: All Ratings</option>
            <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
            <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
            <option value="3">⭐⭐⭐ (3 Stars)</option>
          </select>
        </div>
      </div>

      <div className="d-flex flex-column gap-3 mb-4">
        {processedMovies.length === 0 ? (
          <p className="text-center text-muted mt-3">No movies match your criteria.</p>
        ) : (
          processedMovies.map((movie) => (
            <div key={movie.id} className="p-3 bg-dark d-flex justify-content-between align-items-center rounded shadow-sm">
              
              {/* Poster and Title */}
              <div className="d-flex align-items-center gap-3">
                <img src={movie.poster || "https://via.placeholder.com/50x75?text=No+Image"} alt="poster" width="50" height="75" style={{ objectFit: 'cover', borderRadius: '5px' }} />
                <Link to={`/movie/${movie.id}`} className="text-decoration-none fw-bold fs-5" style={{ color: '#ff6b6b' }}>
                  {movie.title}
                </Link>
              </div>

              {/* Heart and Rating */}
              <div className="text-end">
                <div onClick={() => toggleFavorite(movie.id)} style={{ cursor: 'pointer', fontSize: '1.4rem', marginBottom: '5px' }}>
                  {movie.isFavorite ? <FaHeart className="text-danger" /> : <FaRegHeart className="text-secondary" />}
                </div>
                <div>{renderStars(movie.rating)}</div>
              </div>

            </div>
          ))
        )}
      </div>

      <div className="text-center">
        <Link to="/add-movie" className="btn btn-warning fw-bold px-4 shadow-sm">Add New Movie</Link>
      </div>
    </div>
  );
}