import React from "react";
import "./Navbar.css";
import NavBtn from "./NavBtn";

const Navbar = () => {
  const buttons = [
    { name: "Dashboard", icon: "src/Components/Assets/icons/home.png" },
    { name: "Project", icon: "src/Components/Assets/icons/project.png" },
    { name: "Timeline", icon: "src/Components/Assets/icons/timeline.png" },
    { name: "Backlogs", icon: "src/Components/Assets/icons/backlogs.png" },
    { name: "Settings", icon: "src/Components/Assets/icons/settings.png" },
  ];
  return (
    <div className="navbar-container">
      <div className="logo">
        <h1>SYNOLO</h1>
      </div>
        <div className="nav-btns">
            {buttons.map((button, index) => (
            <NavBtn key={index} path={button.icon} label={button.name} />
            ))}
            </div>
    </div>
  );
};

export default Navbar;
