import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../assets/logo-temperare.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faMoneyBill, faBoxOpen, faArrowLeft, faArrowRight, faHandshake} from '@fortawesome/free-solid-svg-icons';

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
          <div className="menu-item">
              <FontAwesomeIcon icon={faTrophy} />
              {!isCollapsed && <span>Reputação</span>}
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faMoneyBill} />
            {!isCollapsed && <span>Financeiro</span>}
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faHandshake} />
            {!isCollapsed && <span>Vendas</span>}
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faBoxOpen} />
            {!isCollapsed && <span>Logística</span>}
          </div>
        </div>
        <div className="sidebar-toggle-indicator" onClick={toggleSidebar}>
          {isCollapsed ? {faArrowRight} : {faArrowLeft}}
        </div>
      </div>
  );
};

export default Sidebar;
