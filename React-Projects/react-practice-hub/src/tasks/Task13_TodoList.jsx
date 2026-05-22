import React, { useState } from "react";

export default function Task13_TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("All");

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Filter Logic
  const filteredTodos = todos.filter((t) => {
    if (filter === "Completed") return t.completed;
    if (filter === "Incomplete") return !t.completed;
    return true; // "All"
  });

  return (
    <div className="card p-4 mb-4 shadow-sm border-primary">
      <h3 className="text-primary">13. Todo List with Complete/Incomplete Filter</h3>
      
      <div className="d-flex gap-2 mt-3 mb-3">
        <input 
          className="form-control" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a task..."
        />
        <button className="btn btn-primary" onClick={addTodo}>Add</button>
      </div>

      <div className="btn-group mb-3">
        <button className={`btn btn-outline-primary ${filter === "All" ? "active" : ""}`} onClick={() => setFilter("All")}>All</button>
        <button className={`btn btn-outline-primary ${filter === "Completed" ? "active" : ""}`} onClick={() => setFilter("Completed")}>Completed</button>
        <button className={`btn btn-outline-primary ${filter === "Incomplete" ? "active" : ""}`} onClick={() => setFilter("Incomplete")}>Incomplete</button>
      </div>

      <ul className="list-group">
        {filteredTodos.map((t, i) => (
          <li key={i} className="list-group-item d-flex gap-2 align-items-center">
            <input type="checkbox" checked={t.completed} onChange={() => toggleTodo(i)} style={{ transform: "scale(1.5)" }} />
            <span style={{ textDecoration: t.completed ? "line-through" : "none" }}>{t.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}