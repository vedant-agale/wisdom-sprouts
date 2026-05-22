import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AddMovie({ movieList, setMovieList }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState(""); // 🔥 Naya state Poster URL ke liye
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMovie = {
      id: Date.now(),
      title,
      rating: parseInt(rating),
      description,
      poster: poster || "https://via.placeholder.com/300x450?text=No+Poster", // Agar URL na dale toh default image
      isFavorite: false // 🔥 Nayi movie default favorite nahi hogi
    };

    setMovieList([...movieList, newMovie]);
    navigate("/");
  };

  return (
    <div className="card shadow border-0 p-4" style={{ backgroundColor: '#fdfdfd' }}>
      <h2 className="text-center fw-bold mb-4" style={{ color: '#ffcc00' }}>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold" style={{ color: '#ff6b6b' }}>Title</label>
          <input type="text" className="form-control text-white border-0" style={{ backgroundColor: '#212529' }} value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold" style={{ color: '#ff6b6b' }}>Rating (1 to 5)</label>
          <input type="number" min="1" max="5" className="form-control text-white border-0" style={{ backgroundColor: '#212529' }} value={rating} onChange={(e) => setRating(e.target.value)} required />
        </div>
        {/* 🔥 Naya Input Poster URL ke liye */}
        <div className="mb-3">
          <label className="form-label fw-bold" style={{ color: '#ff6b6b' }}>Poster Image URL (Optional)</label>
          <input type="url" className="form-control text-white border-0" style={{ backgroundColor: '#212529' }} placeholder="https://example.com/image.jpg" value={poster} onChange={(e) => setPoster(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="form-label fw-bold" style={{ color: '#ff6b6b' }}>Description</label>
          <textarea className="form-control text-white border-0" rows="3" style={{ backgroundColor: '#212529' }} value={description} onChange={(e) => setDescription(e.target.value)} required ></textarea>
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-warning fw-bold px-4">Add Movie</button>
          <Link to="/" className="btn btn-dark fw-bold px-4">Back</Link>
        </div>
      </form>
    </div>
  );
}