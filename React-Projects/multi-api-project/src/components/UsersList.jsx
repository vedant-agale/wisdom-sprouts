// src/components/UsersList.jsx
import React from 'react';
import useFetch from '../hooks/useFetch';

const UsersList = () => {
  // Apna Custom Hook use kar rahe hain pehli API ke sath!
  const { 
    data: users, 
    loading, 
    error, 
    deleteItem, 
    refreshData 
  } = useFetch('https://jsonplaceholder.typicode.com/users');

  // Agar data load ho raha hai
  if (loading) return <h4 className="text-center mt-4 text-primary">Loading Users...</h4>;
  // Agar koi error aayi
  if (error) return <h4 className="text-center mt-4 text-danger">Error: {error.message}</h4>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">👨‍💻 Users List (JSONPlaceholder)</h2>
        <button className="btn btn-success fw-bold" onClick={refreshData}>
          🔄 Refresh Data
        </button>
      </div>

      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-md-4 mb-3">
            <div className="card shadow-sm border-0 bg-light">
              <div className="card-body">
                <h5 className="card-title fw-bold">{user.name}</h5>
                <p className="card-text mb-1">📧 {user.email}</p>
                <p className="card-text text-muted">🏙️ {user.address?.city}</p>
                
                <button 
                  className="btn btn-danger btn-sm mt-3 w-100 fw-bold"
                  onClick={() => deleteItem(user.id)}
                >
                  🗑️ Delete User
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;