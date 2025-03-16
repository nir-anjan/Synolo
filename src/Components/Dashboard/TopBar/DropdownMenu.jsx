import React from "react";
import "./DropdownMenu.css";

const DropdownMenu = ({ items, visible }) => {
  if (!visible) return null;
  return (
    <div className="dropdown-menu">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
