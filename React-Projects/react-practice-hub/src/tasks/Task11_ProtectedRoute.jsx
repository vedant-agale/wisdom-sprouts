import React, { useState } from "react";
import { MemoryRouter as BrowserRouter, Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";

// 1. Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

// 2. Login Page
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("token", "12345"); // Dummy token
    navigate("/dashboard");
  };
  return (
    <div className="p-3 bg-light border">
      <h5>Login Page 🔒</h5>
      <button className="btn btn-primary btn-sm" onClick={handleLogin}>Login to Generate Token</button>
    </div>
  );
};

// 3. Dashboard Page
const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="p-3 bg-success text-white border">
      <h5>Dashboard 🔓</h5>
      <p>Welcome! You are logged in.</p>
      <button className="btn btn-light btn-sm text-danger" onClick={handleLogout}>Logout</button>
    </div>
  );
};

// 4. Main App for Task 11
export default function Task11_ProtectedRoute() {
  return (
    <div className="card p-4 mb-4 shadow-sm border-dark">
      <h3 className="text-dark">11. Protect Dashboard Route</h3>
      <BrowserRouter>
        <div className="mb-3">
          <Link to="/login" className="btn btn-outline-dark btn-sm me-2">Go to Login</Link>
          <Link to="/dashboard" className="btn btn-outline-dark btn-sm">Go to Dashboard</Link>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}