import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft, FaChevronRight, FaPlus, FaTrash, FaCheck, FaCalendarAlt } from "react-icons/fa";

function App() {
  // 1. All States Management
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("todo_calendar_tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Aaj ki date nikalne ke liye format helper (YYYY-MM-DD)
  const formatDateString = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const [selectedDate, setSelectedDate] = useState(formatDateString(new Date()));
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [taskInput, setTaskInput] = useState("");

  // LocalStorage update
  useEffect(() => {
    localStorage.setItem("todo_calendar_tasks", JSON.stringify(tasks));
  }, [tasks]);

  // 2. Calendar Logic Calculations
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Maheene ka pehla din kaunse weekday pe aa raha hai (0 = Sunday, 1 = Monday...)
  const firstDayIndex = new Date(year, month, 1).getDay();
  // Is maheene mein total kitne din hain
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

  // Next aur Previous Month handler
  const handlePrevMonth = () => setCurrentMonth(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentMonth(new Date(year, month + 1, 1));

  // 3. Task Handlers
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskInput.trim(),
      date: selectedDate, // Selected calendar date pe task attach hoga
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const toggleTaskComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // 4. Helper to check if a specific date has tasks (For Highlighting)
  const hasTasksOnDate = (dateStr) => {
    return tasks.some(t => t.date === dateStr);
  };

  // Filter tasks for the selected date only
  const filteredTasks = tasks.filter(t => t.date === selectedDate);

  // Calendar ke grid boxes render karne ka loop array
  const calendarCells = [];
  // Initial empty cells fill karo (maheene se pehle ke blank spaces)
  for (let i = 0; i < firstDayIndex; i++) {
    calendarCells.push(<div key={`empty-${i}`} className="col border-0 p-3 bg-transparent text-muted text-center" style={{ width: '14.28%' }}></div>);
  }
  // Days 1 to Total Days fill karo
  for (let day = 1; day <= totalDaysInMonth; day++) {
    const cellDateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const isSelected = cellDateStr === selectedDate;
    const hasNote = hasTasksOnDate(cellDateStr);

    calendarCells.push(
      <div 
        key={`day-${day}`} 
        className="col border text-center p-2 position-relative"
        style={{ 
          width: '14.28%', 
          cursor: 'pointer',
          backgroundColor: isSelected ? '#1a73e8' : hasNote ? '#e8f0fe' : '#ffffff',
          color: isSelected ? '#ffffff' : '#212529',
          borderRadius: '8px',
          fontWeight: isSelected || hasNote ? 'bold' : 'normal',
          transition: '0.2s'
        }}
        onClick={() => setSelectedDate(cellDateStr)}
      >
        <span>{day}</span>
        {/* Feature: Note Highlight Dot Indicator */}
        {hasNote && !isSelected && (
          <span 
            className="position-absolute translate-middle-x bg-danger rounded-circle"
            style={{ bottom: '4px', left: '50%', width: '6px', height: '6px' }}
          ></span>
        )}
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ maxWidth: "1000px" }}>
      <header className="text-center mb-5 p-4 bg-white shadow-sm border-bottom border-primary border-5 rounded-3">
        <h1 className="fw-bold text-dark"><FaCalendarAlt className="me-2 text-primary"/> Smart Task Calendar</h1>
        <p className="text-muted m-0">Click on any date to manage your dynamic schedules and logs.</p>
      </header>

      <div className="row g-4">
        {/* LEFT COLUMN: THE INTERACTIVE CALENDAR */}
        <div className="col-lg-7">
          <div className="card shadow-sm border-0 p-4 bg-white" style={{ borderRadius: '15px' }}>
            
            {/* Calendar Month Header Controller */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <button className="btn btn-outline-primary btn-sm p-2 rounded-circle" onClick={handlePrevMonth}><FaChevronLeft /></button>
              <h4 className="fw-bold m-0 text-primary">{monthNames[month]} {year}</h4>
              <button className="btn btn-outline-primary btn-sm p-2 rounded-circle" onClick={handleNextMonth}><FaChevronRight /></button>
            </div>

            {/* Weekdays Row */}
            <div className="row row-cols-7 g-1 mb-2 text-center fw-bold text-secondary text-uppercase" style={{ fontSize: '0.85rem' }}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
                <div key={d} className="col" style={{ width: '14.28%' }}>{d}</div>
              ))}
            </div>

            {/* Monthly Grid Days */}
            <div className="row row-cols-7 g-1">
              {calendarCells}
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: TODO LIST FOR THE SELECTED DATE */}
        <div className="col-lg-5">
          <div className="card shadow-sm border-0 p-4 bg-white h-100" style={{ borderRadius: '15px' }}>
            
            <div className="mb-4">
              <h5 className="text-muted mb-1">Schedule for Date:</h5>
              <h3 className="fw-bold text-dark text-decoration-underline" style={{ color: '#1a73e8' }}>
                {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}
              </h3>
            </div>

            {/* Form to Add Task to Selected Date */}
            <form onSubmit={handleAddTask} className="d-flex gap-2 mb-4">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Write a note or task..." 
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary fw-bold px-3">
                <FaPlus />
              </button>
            </form>

            {/* Filtered Tasks List */}
            <div className="task-container overflow-auto" style={{ maxHeight: '350px' }}>
              {filteredTasks.length === 0 ? (
                <div className="text-center py-5 text-muted">
                  <p className="m-0 fs-5">No notes for this date.</p>
                  <small>Type above to save your first event!</small>
                </div>
              ) : (
                <div className="d-flex flex-column gap-2">
                  {filteredTasks.map((t) => (
                    <div 
                      key={t.id} 
                      className={`p-3 d-flex justify-content-between align-items-center rounded border ${t.completed ? 'bg-light border-success border-opacity-25' : 'bg-white shadow-sm'}`}
                    >
                      <span 
                        style={{ 
                          textDecoration: t.completed ? "line-through" : "none", 
                          color: t.completed ? "#6c757d" : "#212529",
                          fontWeight: '500'
                        }}
                      >
                        {t.text}
                      </span>
                      
                      <div className="d-flex gap-1">
                        <button 
                          onClick={() => toggleTaskComplete(t.id)} 
                          className={`btn btn-sm ${t.completed ? 'btn-success' : 'btn-outline-success'}`}
                        >
                          <FaCheck />
                        </button>
                        <button 
                          onClick={() => handleDeleteTask(t.id)} 
                          className="btn btn-sm btn-outline-danger"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      <footer className="text-center mt-5 text-muted border-top pt-4">
        <small>Smart Assignment Portal | Designed by Vedant Suresh Agale © 2026</small>
      </footer>
    </div>
  );
}

export default App;