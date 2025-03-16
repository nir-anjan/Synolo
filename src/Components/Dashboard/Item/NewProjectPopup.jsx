import React, { useState, useEffect } from "react";
import "./NewProjectPopup.css";

const NewProjectPopup = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    members: [],
    memberInput: ""
  });

  useEffect(() => {
    document.body.classList.add("blurred-background");
    return () => {
      document.body.classList.remove("blurred-background");
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddMember = () => {
    if (formData.memberInput) {
      setFormData({
        ...formData,
        members: [...formData.members, formData.memberInput],
        memberInput: ""
      });
    }
  };

  const handleRemoveMember = (member) => {
    setFormData({
      ...formData,
      members: formData.members.filter((m) => m !== member)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    if (!formData.name) {
      alert("Project name is required");
      return;
    }
    // Submit form data
    onSubmit(formData);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
        <h3>Create New Project</h3>
        <button className="close-button" onClick={onClose}>❌</button>

        </div>
        <div className="popup-body">
        <form onSubmit={handleSubmit}>
          {/* Project Details */}
          <h4>📝 Project Details</h4>
          <label>
            Project Name:
            <input
              type="text"
              name="name"
              placeholder="Enter project name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Project Description:
            <textarea
              name="description"
              placeholder="Briefly describe your project"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </label>

          {/* Team Management */}
          <h4>👥 Team Management</h4>
          <label>
            Invite Member:
            <input
              type="text"
              name="memberInput"
              placeholder="Enter email or username to invite a member"
              value={formData.memberInput}
              onChange={handleChange}
            />
            <button type="button" onClick={handleAddMember}>Invite Member</button>
          </label>
          <ul>
            {formData.members.map((member, index) => (
              <li key={index}>
                {member}
                <button type="button" onClick={() => handleRemoveMember(member)}>Remove</button>
              </li>
            ))}
          </ul>

          {/* Timeline & Milestones */}
          <h4>📅 Timeline & Milestones</h4>
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              placeholder="Select start date"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Expected End Date:
            <input
              type="date"
              name="endDate"
              placeholder="Select expected end date"
              value={formData.endDate}
              onChange={handleChange}
            />
          </label>

          {/* Actions */}
          <button type="submit">Create Project</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>

        </div>
      </div>
    </div>
  );
};

export default NewProjectPopup;
