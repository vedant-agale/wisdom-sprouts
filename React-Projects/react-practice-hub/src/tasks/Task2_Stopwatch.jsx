import React, { useState, useEffect } from "react";

export default function Task2_Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime((t) => t + 1), 1000);
    }
    // Cleanup function
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="card p-4 mb-4 shadow-sm border-warning">
      <h3 className="text-warning">2. Stopwatch</h3>
      <h2>{time} seconds</h2>
      
      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-primary" onClick={() => setRunning(true)}>Start</button>
        <button className="btn btn-warning" onClick={() => setRunning(false)}>Stop</button>
        <button className="btn btn-danger" onClick={() => { setTime(0); setRunning(false); }}>Reset</button>
      </div>
    </div>
  );
}