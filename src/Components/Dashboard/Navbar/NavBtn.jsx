import React from "react";

const NavBtn = (props) => {
  return (
    <div className="btn">
      <button>
        <img src={props.path} alt="icon" />
        <div className="">

        {props.label}
        </div>
      </button>
    </div>
  );
};

export default NavBtn;
