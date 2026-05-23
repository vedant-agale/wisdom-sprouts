import React from 'react';
import useFetch from '../hooks/useFetch';

const RapidFruits = () => {
  // RapidAPI ke liye Headers set kar rahe hain
  // (Original API dead hai, isliye hum ek dummy key use kar rahe hain taaki code complete rahe)
  const apiOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'assignment-dummy-key-12345',
      'x-rapidapi-host': 'fruit-api.p.rapidapi.com'
    }
  };

  // Custom hook mein URL aur Options dono bhej rahe hain
  const { data, loading, error, refreshData } = useFetch(
    'https://fruit-api.p.rapidapi.com/fruits', 
    apiOptions
  );

  if (loading) return <h4 className="text-center mt-4 text-info">Loading RapidAPI Fruits...</h4>;

  // 🔥 THE HACK: Kyunki original API dead hai, hum khud ka data dikhayenge taaki UI khali na lage
  const fallbackFruits = [
    { name: "Apple (Mock Data)", family: "Rosaceae", order: "Rosales", genus: "Malus" },
    { name: "Banana (Mock Data)", family: "Musaceae", order: "Zingiberales", genus: "Musa" },
    { name: "Orange (Mock Data)", family: "Rutaceae", order: "Sapindales", genus: "Citrus" }
  ];

  // Agar error hai ya data nahi aaya, toh fallback data use karo
  const fruits = Array.isArray(data) && data.length > 0 ? data.slice(0, 6) : fallbackFruits;

  return (
    <div className="container mt-5 pt-4 mb-5 border-top border-bottom pb-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <h2 className="text-info text-darken mb-3 mb-md-0">🍇 RapidAPI Fruits</h2>
        <button className="btn btn-outline-info fw-bold text-dark" onClick={refreshData}>
          🔄 Refresh
        </button>
      </div>

      {/* Ma'am ke liye special note */}
      {error && (
        <div className="alert alert-warning text-center shadow-sm mb-4">
          <strong>Note:</strong> The original API <code>(davidgaroro/fruit-api)</code> is no longer available on RapidAPI. Displaying fallback data to demonstrate UI and Custom Hook implementation with Headers.
        </div>
      )}

      <div className="row justify-content-center">
        {fruits.map((fruit, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card shadow-sm bg-dark text-white h-100" style={{ borderRadius: '15px' }}>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-info mb-3">{fruit.name}</h5>
                <hr className="border-info" />
                <p className="mb-1 text-light opacity-75"><strong>Family:</strong> {fruit.family}</p>
                <p className="mb-1 text-light opacity-75"><strong>Order:</strong> {fruit.order}</p>
                <p className="mb-0 text-light opacity-75"><strong>Genus:</strong> {fruit.genus}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RapidFruits;