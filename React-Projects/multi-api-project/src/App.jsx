import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersList from './components/UsersList';
import ProductsList from './components/ProductsList';
import RandomUser from './components/RandomUser';
import Fruityvice from './components/Fruityvice';
import RapidFruits from './components/RapidFruits';s

function App() {
  return (
    <div className="pb-5">
      <h1 className="text-center mt-4 mb-5 fw-bold text-decoration-underline text-dark">
        Multi API Project 🚀
      </h1>
      
      <UsersList />
      <ProductsList />
      <RandomUser />
      <Fruityvice />
      <RapidFruits />
      
    </div>
  );
}

export default App;