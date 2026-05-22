// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. 👇 NAVBAR YAHAN IMPORT KIYA HAI 👇
import Navbar from './components/Navbar'; 

// Pages Import
import MovieList from './pages/MovieList';
import AddMovie from './pages/AddMovie';
import MovieDetails from './pages/MovieDetails';

// Initial Data Import
import initialMovies from './data';

function App() {
  // State Initialization (LocalStorage se data uthana)
  const [movieList, setMovieList] = useState(() => {
    const savedMovies = localStorage.getItem('movieList');
    return savedMovies ? JSON.parse(savedMovies) : initialMovies;
  });

  // Sync with LocalStorage (Jab bhi list update hogi, save ho jayegi)
  useEffect(() => {
    localStorage.setItem('movieList', JSON.stringify(movieList));
  }, [movieList]);

  return (
    <Router>
      
      {/* 2. 👇 ROUTER KE TURANT BAAD NAVBAR LAGAYA HAI 👇 */}
      <Navbar /> 

      <div className="container mt-4">
        <Routes>
          {/* Home Page: Show all movies */}
          <Route 
            path="/" 
            element={<MovieList movies={movieList} setMovieList={setMovieList} />} 
          />
          
          {/* Add Movie Page */}
          <Route 
            path="/add-movie" 
            element={<AddMovie setMovieList={setMovieList} />} 
          />
          
          {/* Movie Details Page */}
          <Route 
            path="/movie/:id" 
            element={<MovieDetails movies={movieList} setMovieList={setMovieList} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;