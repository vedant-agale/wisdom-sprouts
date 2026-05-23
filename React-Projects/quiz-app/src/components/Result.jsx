import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRedo, FaHome, FaHistory, FaTrophy } from "react-icons/fa";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const finalScore = location.state?.finalScore ?? 0;
  const totalQuestions = location.state?.totalQuestions ?? 5;
  const [scoreHistory, setScoreHistory] = useState([]);

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem("quiz_scores")) || [];
    if (location.state) {
      const newAttempt = {
        score: finalScore,
        total: totalQuestions,
        date: new Date().toLocaleDateString()
      };
      const updatedScores = [newAttempt, ...savedScores];
      localStorage.setItem("quiz_scores", JSON.stringify(updatedScores));
      setScoreHistory(updatedScores);
    } else {
      setScoreHistory(savedScores);
    }
  }, []);

  const getFeedbackMessage = () => {
    const ratio = finalScore / totalQuestions;
    if (ratio === 1) return { text: "Perfect Score! Excellent Work! 🌟", color: "text-success" };
    if (ratio >= 0.6) return { text: "Good job! Well played! 👍", color: "text-info" };
    return { text: "Keep practicing! You can do better! 💪", color: "text-danger" };
  };

  const feedback = getFeedbackMessage();

  return (
    <div className="card shadow border-0 p-4 p-md-5 text-center bg-white" style={{ maxWidth: "550px", width: "100%", borderRadius: "15px" }}>
      <div className="mb-3 text-warning" style={{ fontSize: "3.5rem" }}><FaTrophy /></div>
      <h2 className="fw-bold mb-2">Quiz Completed!</h2>
      <p className={`fw-bold fs-5 mb-4 ${feedback.color}`}>{feedback.text}</p>

      <div className="bg-light rounded-3 p-4 mb-4 border d-inline-block mx-auto" style={{ minWidth: "200px" }}>
        <h4 className="text-muted m-0">Your Score</h4>
        <h1 className="display-4 fw-bold text-primary m-0">{finalScore} <span className="fs-3 text-secondary">/ {totalQuestions}</span></h1>
      </div>

      <div className="d-flex gap-3 justify-content-center mb-5">
        <button className="btn btn-primary fw-bold px-4 py-2" onClick={() => navigate("/quiz")}>
          <FaRedo className="me-2"/> Retake Quiz
        </button>
        <button className="btn btn-outline-dark fw-bold px-4 py-2" onClick={() => navigate("/")}>
          <FaHome className="me-2"/> Home
        </button>
      </div>

      {/* 🔥 Bonus Segment: Score Persistence Metrics Table */}
      {scoreHistory.length > 0 && (
        <div className="text-start border-top pt-4">
          <h5 className="fw-bold text-secondary mb-3"><FaHistory className="me-2" /> Attempt History logs:</h5>
          <div className="overflow-auto" style={{ maxHeight: "180px" }}>
            <table className="table table-sm table-hover align-middle m-0">
              <thead className="table-light">
                <tr>
                  <th>Attempt</th>
                  <th>Date</th>
                  <th className="text-end">Score</th>
                </tr>
              </thead>
              <tbody>
                {scoreHistory.map((s, index) => (
                  <tr key={index}>
                    <td><span className="badge bg-secondary opacity-75">#{scoreHistory.length - index}</span></td>
                    <td>{s.date}</td>
                    <td className="text-end fw-bold text-primary">{s.score} / {s.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}