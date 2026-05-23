import React from 'react';
import useFetch from '../hooks/useFetch';

const Fruityvice = () => {
  // Ma'am ke PDF wali 4th URL
  const { data, loading, error, refreshData } = useFetch('https://www.fruityvice.com/api/fruit/all');

  if (loading) return <h4 className="text-center mt-4 text-danger">Loading Fruits...</h4>;
  
  // Agar API ne localhost ko block kiya (CORS error), toh hum properly error dikhayenge
  if (error) return (
    <div className="container mt-5 pt-4 border-top text-center">
      <h2 className="text-danger">🍎 Fruityvice API</h2>
      <p className="text-muted">Note for Assignment: This API often blocks direct localhost requests (CORS Error).</p>
      <p className="text-danger fw-bold">Technical Error: {error.message}</p>
    </div>
  );

  // Agar data aa gaya, toh pehle 6 fruits dikhayenge
  const fruits = Array.isArray(data) ? data.slice(0, 6) : [];

  return (
    <div className="container mt-5 pt-4 border-top">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-danger">🍎 Fruityvice API</h2>
        <button className="btn btn-outline-danger fw-bold" onClick={refreshData}>
          🔄 Refresh Fruits
        </button>
      </div>

      <div className="row">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="col-md-4 mb-3">
            <div className="card shadow-sm border-danger border-opacity-25 bg-light h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold text-danger">{fruit.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Family: {fruit.family}</h6>
                <hr />
                <p className="mb-1 fw-bold">Nutrition Facts:</p>
                <ul className="mb-0" style={{ fontSize: '14px' }}>
                  <li>Calories: {fruit.nutritions.calories}</li>
                  <li>Sugar: {fruit.nutritions.sugar}g</li>
                  <li>Carbs: {fruit.nutritions.carbohydrates}g</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruityvice;