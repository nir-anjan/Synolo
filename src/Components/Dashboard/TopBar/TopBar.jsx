import React, { useState } from "react";
import "./TopBar.css";
import DropdownMenu from "./DropdownMenu";

const TopBar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = ["Notification 1", "Notification 2", "Notification 3"];
  const chatOptions = ["Chat 1", "Chat 2", "Chat 3"];
  const profileOptions = ["Profile", "Settings", "Sign Out"];

  return (
    <div className="topBar-container">
      <div className="">
        <input type="text" placeholder="Search" />
      </div>

      <div className="topBar-icons">
        <div className="notification-icon">
          <img
            src="src\Components\Assets\icons\Notification.png"
            alt="bell"
            onClick={() => setShowNotifications(!showNotifications)}
          />
          <DropdownMenu items={notifications} visible={showNotifications} />
        </div>
        <div className="chat-icon">
          <img
            src="src\Components\Assets\icons\chat.png"
            alt="chat"
            onClick={() => setShowChat(!showChat)}
          />
          <DropdownMenu items={chatOptions} visible={showChat} />
        </div>
        <div className="profile-icon">
          <img
            src="src\Components\Assets\icons\profile.png"
            alt="profile"
            onClick={() => setShowProfile(!showProfile)}
          />
          <DropdownMenu items={profileOptions} visible={showProfile} />
        </div>
        <p>Username</p>
      </div>
    </div>
  );
};

export default TopBar;
