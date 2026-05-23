import React from 'react';
import useFetch from '../hooks/useFetch';

const RandomUser = () => {
  // Hum API ko bol rahe hain ki ek baar mein 3 random users de (?results=3)
  const { data, loading, error, refreshData } = useFetch('https://randomuser.me/api/?results=3');

  if (loading) return <h4 className="text-center mt-4 text-warning">Loading Random Users...</h4>;
  if (error) return <h4 className="text-center mt-4 text-danger">Error: {error.message}</h4>;

  // Twist: Random User API data direct array mein nahi, 'results' key ke andar deti hai
  const users = data.results || []; 

  return (
    <div className="container mt-5 pt-4 border-top">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-warning text-darken">🎲 Random Users API</h2>
        {/* Ispe click karne se har baar naye users aayenge */}
        <button className="btn btn-warning fw-bold text-dark" onClick={refreshData}>
          🔄 Get New Users
        </button>
      </div>

      <div className="row justify-content-center">
        {users.map((user, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow border-0 bg-dark text-white h-100 p-3 text-center" style={{ borderRadius: '15px' }}>
              <img 
                src={user.picture.large} 
                className="rounded-circle mx-auto mt-2 border border-3 border-warning" 
                alt="profile" 
                style={{ width: "100px", height: "100px" }} 
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-warning">
                  {user.name.title} {user.name.first} {user.name.last}
                </h5>
                <p className="card-text mb-1">🌍 {user.location.city}, {user.location.country}</p>
                <p className="card-text text-light opacity-75">📞 {user.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomUser;