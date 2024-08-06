import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../assets/logo.jpg';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="sidebar-menu">
        <button className="sidebar-button">Marketplace</button>
        <button className="sidebar-button">Data</button>
      </div>
      <div className="sidebar-toggle-indicator" onClick={toggleSidebar}>
        {isCollapsed ? '>' : '<'}
      </div>
    </div>
  );
};

export default Sidebar;
