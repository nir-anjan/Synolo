import React from "react";

const NavBtn = (props) => {
  return (
    <div>
      <button className="btn">
        <img src={props.path} alt="icon" />
        <div className="">{props.label}</div>
      </button>
    </div>
  );
};

export default NavBtn;
