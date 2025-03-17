import React from 'react';
import Navbar from "./Navbar/Navbar";
import TopBar from './TopBar/TopBar';
import Item from './Item/Item';
import "./Dashboard.css"
import MyTasks from './MyTasks/MyTasks';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='navbar-div'>
        <Navbar />
      </div>
      <div className='main-content'>
        <div className='topBar-div'>
          <TopBar />
        </div>
        <div className='items-container'>
          <Item />
          <MyTasks/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;