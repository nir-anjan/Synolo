import React from "react";
import "./MyTasks.css";
import TaskCard from "./TaskCard";

const tasks = [
  {
    id: 1,
    task_name: "Design Homepage UI",
    date: "2025-03-17",
    assigned_to:
      "https://i.pinimg.com/736x/91/7a/3b/917a3b711444e5e9db56038752c49e1b.jpg",
    status: "todo",
  },
  {
    id: 2,
    task_name: "Fix Login Bug",
    date: "2025-03-18",
    assigned_to:
      "https://th.bing.com/th/id/R.8e2bd86c8178eaef469d639d6b53efd0?rik=9vK3UfjYaQZ%2bKA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-u4DYvnFCCUM%2fUIP6nRQaNzI%2fAAAAAAAALyc%2fTcZDDpsj4bs%2fs1600%2fNaruto%2bShippuden%2bWallpapers%2b9.jpg&ehk=i36SIcnsB9FI4xRU5XbPomex%2fYdK1Q6vWyS66QDvJqk%3d&risl=&pid=ImgRaw&r=0",
    status: "in progress",
  },
  {
    id: 3,
    task_name: "Deploy Backend API",
    date: "2025-03-19",
    assigned_to:
      "https://th.bing.com/th/id/OIP.QmuThsyE9aGy18tRAq2lYQHaF7?w=1280&h=1024&rs=1&pid=ImgDetMain",
    status: "done",
  },
];

const MyTasks = () => {
  return (
    <div className="my-tasks-container">
      <div className="head">
        <h2>My Tasks</h2>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            taskName={task.task_name}
            date={task.date}
            assignedTo={task.assigned_to}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
