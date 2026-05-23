import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaAward } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();
  const pastScores = JSON.parse(localStorage.getItem("quiz_scores")) || [];

  return (
    <div className="card shadow border-0 p-4 p-md-5 text-center" style={{ maxWidth: "500px", width: "100%", borderRadius: "15px" }}>
      <h1 className="fw-bold text-primary mb-3">🧠 Quiz Master</h1>
      <p className="text-muted mb-4">Test your knowledge on web development concepts in this quick quiz challenge!</p>
      
      <button className="btn btn-primary btn-lg fw-bold w-100 mb-4 py-3 shadow-sm" onClick={() => navigate("/quiz")}>
        <FaPlay className="me-2" /> Start Quiz
      </button>

      {pastScores.length > 0 && (
        <div className="border-top pt-4 text-start">
          <h5 className="fw-bold text-secondary mb-3"><FaAward className="text-warning me-2"/> Recent Attempts:</h5>
          <div className="overflow-auto" style={{ maxHeight: "150px" }}>
            <ul className="list-group list-group-flush">
              {pastScores.slice(0, 3).map((s, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent text-muted">
                  <span>Attempt #{pastScores.length - index}</span>
                  <span className="badge bg-secondary rounded-pill">{s.score} / {s.total}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}