import React, { useState } from "react";
import "./TaskCard.css";

const TaskCard = ({
  taskName,
  date,
  assignedTo,
  status,
  draggable,
  onDragStart,
}) => {
  const [taskStatus, setTaskStatus] = useState(status);

  const handleStatusChange = (event) => {
    setTaskStatus(event.target.value);
  };

  return (
    <div className="task-card" draggable={draggable} onDragStart={onDragStart}>
      <div className="task-header">
        <h3 className="task-title">{taskName}</h3>
        <div className="task-date-section">
          <div className="options">
            <button className="menu-btn">⋮</button>
          </div>
          <span className="task-date">{date}</span>
        </div>
      </div>
      <div className="task-content">
        <div className="assigned-section">
          <span className="label">Assigned To</span>
          <img className="avatar" src={assignedTo} alt="Assigned To" />
        </div>
        <div className="status-section">
          <span className="label">Status</span>
          <select
            className="status-dropdown"
            value={taskStatus}
            onChange={handleStatusChange}
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
