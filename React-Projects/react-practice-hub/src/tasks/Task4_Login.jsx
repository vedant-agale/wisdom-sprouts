// src/tasks/Task4_Login.jsx
import React, { useState } from "react";
// Toastify import karna zaroori hai
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Task4_Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Page reload hone se roko
    
    // Validation: Agar kuch khali hai toh Error Toast dikhao
    if (!email || !password) {
      toast.error("Email and Password are required!", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      // Sahi hai toh Success Toast dikhao
      toast.success(`Welcome, ${email}! Login Successful.`, {
        position: "top-center",
        autoClose: 3000,
      });
      // Console mein bhi data dikhao as per assignment
      console.log("Logged In User:", { email, password });
      
      // Form clean kar do
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="card p-4 mb-4 shadow-sm border-danger">
      <h3 className="text-danger">4. Login Form Validation</h3>
      
      {/* Ye component zaroori hai toasts dikhane ke liye */}
      <ToastContainer />

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <input 
            type="password" 
            className="form-control" 
            placeholder="Enter Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-danger w-100">Login</button>
      </form>
    </div>
  );
}