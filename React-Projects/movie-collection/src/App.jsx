import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import initialMovies from "./data";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./components/MovieDetails";
import EditMovie from "./components/EditMovie";
import Watchlist from "./components/Watchlist"; // 🔥 Naya Watchlist Component

function App() {
  const [movieList, setMovieList] = useState(() => {
    const savedMovies = localStorage.getItem("movieList");
    return savedMovies ? JSON.parse(savedMovies) : initialMovies;
  });

  // 🔥 Feature 8: Dark Mode State (Default Dark)
  const [isDarkMode, setIsDarkMode] = useState(true); 

  useEffect(() => {
    localStorage.setItem("movieList", JSON.stringify(movieList));
  }, [movieList]);

  return (
    // 🔥 Bootstrap 5.3 ka jaadu: data-bs-theme se background/text automatically manage hoga
    <div data-bs-theme={isDarkMode ? "dark" : "light"} className="min-vh-100 pb-5" style={{ transition: "0.3s" }}>
      <BrowserRouter>
        
        {/* 🚀 Feature 8 & 9: Navbar with Theme Toggle & Watchlist Link */}
        <div className="navbar navbar-dark bg-dark px-4 py-3 mb-4 shadow-sm d-flex justify-content-between align-items-center">
          <Link to="/" className="text-decoration-none text-warning fs-3 fw-bold">🎬 Movie Collection</Link>
          <div className="d-flex gap-3 align-items-center">
            <Link to="/watchlist" className="btn btn-danger fw-bold shadow-sm">📌 Watchlist</Link>
            <button className="btn btn-outline-light fw-bold" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>

        <div className="container" style={{ maxWidth: '900px' }}>
          <Routes>
            <Route path="/" element={<MovieList movies={movieList} setMovieList={setMovieList} />} />
            <Route path="/add-movie" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />
            <Route path="/movie/:id" element={<MovieDetails movies={movieList} setMovieList={setMovieList} />} />
            <Route path="/edit-movie/:id" element={<EditMovie movieList={movieList} setMovieList={setMovieList} />} />
            {/* 🔥 Feature 9: Watchlist Route */}
            <Route path="/watchlist" element={<Watchlist movies={movieList} setMovieList={setMovieList} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;