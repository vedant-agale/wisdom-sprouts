// src/tasks/Task3_JokeApp.jsx
import React, { useEffect, useState } from "react";

export default function Task3_JokeApp() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await res.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke("Oops! Couldn't load a joke. Try again.");
    }
    setLoading(false);
  };

  // Jab component pehli baar load ho, tab ek joke le aao
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="card p-4 mb-4 shadow-sm border-info">
      <h3 className="text-info">3. Random Joke Generator</h3>
      <div className="p-3 bg-light rounded mt-2 mb-3">
        <p className="fs-5 m-0 fw-semibold">
          {loading ? "Thinking of a joke..." : joke}
        </p>
      </div>
      <button 
        className="btn btn-info text-white" 
        onClick={fetchJoke}
        disabled={loading}
      >
        Get New Joke 😂
      </button>
    </div>
  );
}