import React, { useState } from "react";

export default function Task1_Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card p-4 mb-4 shadow-sm border-primary">
      <h3 className="text-primary">1. Counter with Even/Odd Check</h3>
      <h2>Count: {count}</h2>
      {/* Even/Odd Check Logic */}
      <h5 className={count % 2 === 0 ? "text-success" : "text-danger"}>
        {count % 2 === 0 ? "Even" : "Odd"}
      </h5>
      
      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
}