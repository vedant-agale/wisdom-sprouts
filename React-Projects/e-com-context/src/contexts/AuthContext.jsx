// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// 1. Context banaya
export const AuthContext = createContext();

// 2. Provider banaya
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // LocalStorage se user nikalna (refresh hone par login rahe)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Login Function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Logout Function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};