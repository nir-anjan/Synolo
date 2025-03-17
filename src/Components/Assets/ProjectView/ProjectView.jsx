import React from "react";
import Navbar from "../../Dashboard/Navbar/Navbar";
import TopBar from "../../Dashboard/TopBar/TopBar";
import ProjectOverview from "./ProjectOverview/ProjectOverview";
import TaskBoard from "./TaskBoard/TaskBoard";
const ProjectView = () => {
  return (
    <div className="dashboard-container">
      <div className="navbar-div">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="topBar-div">
          <TopBar />
        </div>
        <div className="items-container">
          <ProjectOverview />
          <TaskBoard />
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
