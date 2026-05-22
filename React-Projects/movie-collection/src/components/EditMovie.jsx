import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function EditMovie({ movieList, setMovieList }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Jo movie edit karni hai use dhundho
  const movieToEdit = movieList.find((m) => m.id === parseInt(id));

  // Form states (Pehle se data prefill kiya hua hai)
  const [title, setTitle] = useState(movieToEdit ? movieToEdit.title : "");
  const [rating, setRating] = useState(movieToEdit ? movieToEdit.rating : "");
  const [description, setDescription] = useState(movieToEdit ? movieToEdit.description : "");

  // Agar movie nahi mili
  if (!movieToEdit) return <h2 className="text-center mt-5">Movie Not Found</h2>;

  const handleUpdate = (e) => {
    e.preventDefault();
    
    // Nayi updated details
    const updatedMovie = {
      ...movieToEdit, // Purani ID same rahegi
      title,
      rating: parseInt(rating),
      description
    };

    // Array mein purani movie ko nayi se replace karo
    const updatedList = movieList.map((m) => (m.id === parseInt(id) ? updatedMovie : m));
    
    setMovieList(updatedList);
    navigate(`/movie/${id}`); // Update hone ke baad wapas Details page pe bhej do
  };

  return (
    <div className="card shadow border-0 p-4" style={{ backgroundColor: '#fdfdfd' }}>
      <h2 className="text-center fw-bold mb-4 text-info">✏️ Edit Movie</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label fw-bold text-info">Title</label>
          <input type="text" className="form-control text-white border-0" style={{ backgroundColor: '#212529' }} value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold text-info">Rating (1 to 5)</label>
          <input type="number" min="1" max="5" className="form-control text-white border-0" style={{ backgroundColor: '#212529' }} value={rating} onChange={(e) => setRating(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="form-label fw-bold text-info">Description</label>
          <textarea className="form-control text-white border-0" rows="3" style={{ backgroundColor: '#212529' }} value={description} onChange={(e) => setDescription(e.target.value)} required ></textarea>
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-info fw-bold px-4 text-white">Update Details</button>
          <Link to={`/movie/${id}`} className="btn btn-dark fw-bold px-4">Cancel</Link>
        </div>
      </form>
    </div>
  );
}