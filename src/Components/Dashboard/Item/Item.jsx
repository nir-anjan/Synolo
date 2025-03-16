import React, { useState } from "react";
import "./Item.css";
import NewProjectPopup from "./NewProjectPopup"; // Import the new component

const data = [
  {
    name: "Project 1",
    ownedBy: "You",
    team: "Synolo",
    progress: "85%",
    startDate: "20 Jan 2024",
  },
  {
    name: "Project 1",
    ownedBy: "You",
    team: "Synolo",
    progress: "85%",
    startDate: "20 Jan 2024",
  },
  {
    name: "Project 1",
    ownedBy: "You",
    team: "Synolo",
    progress: "85%",
    startDate: "20 Jan 2024",
  },
];

const Item = () => {
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleNewProjectClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowPopup(false);
  };

  return (
    <div className="item-container">
      <div className="head">
        <h2>My Project</h2>
        <button className="new-project-btn" onClick={handleNewProjectClick}>New Project</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Owned By</th>
              <th>Team</th>
              <th>Progress</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.ownedBy}</td>
                <td>{item.team}</td>
                <td>{item.progress}</td>
                <td>{item.startDate}</td>
                <td className="actions">
                  <button className="action-btn delete-btn">🗑️</button>
                  <button className="action-btn edit-btn">✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {showPopup && (
        <NewProjectPopup
          onClose={handleClosePopup}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default Item;
