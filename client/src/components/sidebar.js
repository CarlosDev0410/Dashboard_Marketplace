import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../assets/logo-temperare.png';

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
        <button className="sidebar-button">Faturamento</button>
        <button className="sidebar-button">Reputação</button>
        <button className="sidebar-button">Finanças</button>
        <button className="sidebar-button">Estoque</button>
      </div>
      <div className="sidebar-toggle-indicator" onClick={toggleSidebar}>
        {isCollapsed ? '>>' : '<<'}
      </div>
    </div>
  );
};

export default Sidebar;
