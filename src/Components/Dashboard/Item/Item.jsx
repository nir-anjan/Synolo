import React, { useState } from "react";
import "./Item.css";
import NewProjectPopup from "./NewProjectPopup"; // Import the new component

const initialData = [
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
  const [data, setData] = useState(initialData);
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const [editIndex, setEditIndex] = useState(null); // State to manage the index of the row being edited

  const handleNewProjectClick = () => {
    setEditIndex(null);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = (formData) => {
    if (editIndex !== null) {
      // Edit existing project
      const updatedData = data.map((item, index) =>
        index === editIndex ? { ...item, ...formData } : item
      );
      setData(updatedData);
    } else {
      // Add new project to the data
      const newProject = {
        name: formData.name,
        ownedBy: "You",
        team: "Synolo",
        progress: "0%",
        startDate: formData.startDate,
      };
      setData([...data, newProject]);
    }
    setShowPopup(false);
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setShowPopup(true);
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
                  <button className="action-btn delete-btn" onClick={() => handleDelete(index)}>🗑️</button>
                  <button className="action-btn edit-btn" onClick={() => handleEdit(index)}>✏️</button>
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
          initialData={editIndex !== null ? data[editIndex] : null}
        />
      )}
    </div>
  );
};

export default Item;
