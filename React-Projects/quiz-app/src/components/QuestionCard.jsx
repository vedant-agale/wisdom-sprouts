import React from "react";

export default function QuestionCard({ question, options, handleAnswer, selectedAnswer, correctAnswer }) {
  return (
    <div>
      <h4 className="fw-bold text-dark mb-4">{question}</h4>
      <div className="d-flex flex-column gap-3">
        {options.map((option, index) => {
          let btnClass = "btn btn-outline-dark text-start py-3 px-4 fw-medium fs-5";
          
          // 🔥 Dynamic feedback processing
          if (selectedAnswer) {
            if (option === correctAnswer) {
              btnClass = "btn btn-success text-start py-3 px-4 fw-bold fs-5 text-white";
            } else if (option === selectedAnswer) {
              btnClass = "btn btn-danger text-start py-3 px-4 fw-bold fs-5 text-white";
            } else {
              btnClass = "btn btn-outline-secondary text-start py-3 px-4 opacity-50 fs-5";
            }
          }

          return (
            <button
              key={index}
              className={btnClass}
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null} // Selection lock till next timeout
              style={{ borderRadius: "10px", transition: "0.2s" }}
            >
              {index + 1}. {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}