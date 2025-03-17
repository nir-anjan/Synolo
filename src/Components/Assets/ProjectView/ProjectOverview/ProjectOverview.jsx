import React from "react";
import "./ProjectOverview.css";

const ProjectOverview = () => {
  return (
    <div className="project-overview">
      <h2 className="project-title">Project Name</h2>
      <p className="project-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nulla
        vitae ligula bibendum feugiat.
      </p>
      <div className="project-details">
        <div className="detail">
          <span className="label">Lead</span>
          <span className="value">Lead Name</span>
        </div>
        <div className="detail">
          <span className="label">Members</span>
          <div className="avatars">
            <div className="avatar"></div>
            <div className="avatar"></div>
          </div>
        </div>
        <div className="detail">
          <span className="label">Status</span>
          <div className="status"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
