import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdDashboard, MdPeople, MdSettings } from 'react-icons/md';

const iconClass = 'sidebar-icon';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <MdDashboard size={32} className={iconClass} /> Datawise
      </h2>
      <nav>
        <ul>
          <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}><MdDashboard size={20} className={iconClass} />Dashboard</NavLink></li>
          <li><NavLink to="/users" className={({ isActive }) => isActive ? 'active' : ''}><MdPeople size={20} className={iconClass} />Users</NavLink></li>
          <li><NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}><MdSettings size={20} className={iconClass} />Settings</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 