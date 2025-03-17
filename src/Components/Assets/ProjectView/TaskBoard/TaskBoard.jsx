import React, { useState } from "react";
import "./TaskBoard.css";
import TaskCard from "../../../Dashboard/MyTasks/TaskCard"; // import TaskCard

const initialTasks = [
  {
    id: 1,
    taskName: "Design Homepage UI",
    date: "2025-03-17",
    assignedTo: "User A",
    status: "todo",
  },
  {
    id: 2,
    taskName: "Create Database Schema",
    date: "2025-03-18",
    assignedTo: "User B",
    status: "todo",
  },
  {
    id: 3,
    taskName: "Write API Documentation",
    date: "2025-03-19",
    assignedTo: "User C",
    status: "todo",
  },
  {
    id: 4,
    taskName: "Fix Login Bug",
    date: "2025-03-20",
    assignedTo: "User D",
    status: "in-progress",
  },
  {
    id: 5,
    taskName: "Implement JWT Authentication",
    date: "2025-03-21",
    assignedTo: "User E",
    status: "in-progress",
  },
  {
    id: 6,
    taskName: "Integrate Payment Gateway",
    date: "2025-03-22",
    assignedTo: "User F",
    status: "in-progress",
  },
  {
    id: 7,
    taskName: "Deploy Backend API",
    date: "2025-03-23",
    assignedTo: "User G",
    status: "done",
  },
  {
    id: 8,
    taskName: "Optimize Database Queries",
    date: "2025-03-24",
    assignedTo: "User H",
    status: "done",
  },
  {
    id: 9,
    taskName: "Finalize UI Components",
    date: "2025-03-25",
    assignedTo: "User I",
    status: "done",
  },
];

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragStart = (event, taskId) => {
    event.dataTransfer.setData("taskId", taskId);
  };

  const onDrop = (event, status) => {
    const taskId = event.dataTransfer.getData("taskId");
    const updatedTasks = tasks.map((task) => {
      if (task.id === parseInt(taskId)) {
        task.status = status;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="task-board">
      <h2 className="task-title">Tasks</h2>
      <div className="task-columns">
        <div
          className="task-column"
          onDrop={(event) => onDrop(event, "todo")}
          onDragOver={onDragOver}
        >
          <h3>Todo</h3>
          {tasks
            .filter((task) => task.status === "todo")
            .map((task) => (
              <TaskCard
                key={task.id}
                taskName={task.taskName}
                date={task.date}
                assignedTo={task.assignedTo}
                status={task.status}
                draggable
                onDragStart={(event) => onDragStart(event, task.id)}
              />
            ))}
        </div>
        <div
          className="task-column"
          onDrop={(event) => onDrop(event, "in-progress")}
          onDragOver={onDragOver}
        >
          <h3>Progress</h3>
          {tasks
            .filter((task) => task.status === "in-progress")
            .map((task) => (
              <TaskCard
                key={task.id}
                taskName={task.taskName}
                date={task.date}
                assignedTo={task.assignedTo}
                status={task.status}
                draggable
                onDragStart={(event) => onDragStart(event, task.id)}
              />
            ))}
        </div>
        <div
          className="task-column"
          onDrop={(event) => onDrop(event, "done")}
          onDragOver={onDragOver}
        >
          <h3>Done</h3>
          {tasks
            .filter((task) => task.status === "done")
            .map((task) => (
              <TaskCard
                key={task.id}
                taskName={task.taskName}
                date={task.date}
                assignedTo={task.assignedTo}
                status={task.status}
                draggable
                onDragStart={(event) => onDragStart(event, task.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
