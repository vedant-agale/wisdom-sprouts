import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data";
import QuestionCard from "./QuestionCard";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  const navigate = useNavigate();
  const currentQuestion = questions[currentIndex];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    let currentUpdatedScore = score;

    if (answer === currentQuestion.answer) {
      currentUpdatedScore = score + 1;
      setScore(currentUpdatedScore);
    }

    // 1.2 second animation processing delay
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
      } else {
        navigate("/result", { state: { finalScore: currentUpdatedScore, totalQuestions: questions.length } });
      }
    }, 1200);
  };

  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="card shadow border-0 p-4 p-md-5 bg-white" style={{ maxWidth: "650px", width: "100%", borderRadius: "15px" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="badge bg-primary text-white p-2 fs-6">Question {currentIndex + 1} of {questions.length}</span>
        <span className="fw-bold text-secondary">Score: {score}</span>
      </div>

      {/* 🔥 Bootstrap Dynamic Progress Bar */}
      <div className="progress mb-4" style={{ height: "10px" }}>
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{ width: `${progressPercent}%` }}></div>
      </div>

      <QuestionCard 
        question={currentQuestion.question}
        options={currentQuestion.options}
        handleAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
        correctAnswer={currentQuestion.answer}
      />
    </div>
  );
}