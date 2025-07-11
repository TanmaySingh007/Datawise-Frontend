import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar';
import CustomBarChart from './components/BarChart';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import Users from './pages/Users';
import Settings from './pages/Settings';
import { MdBarChart, MdTableChart, MdPersonAdd } from 'react-icons/md';

// Fix: Add type for Layout props
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <div className="main-content">{children}</div>
  </div>
);

const Dashboard = () => (
  <div>
    <div className="card fade-in">
      <h1 style={{ display: 'flex', alignItems: 'center', gap: 10 }}><MdBarChart size={28} className="section-icon" /> Dashboard</h1>
      <CustomBarChart />
    </div>
    <div className="card fade-in" style={{ animationDelay: '0.1s' }}>
      <h2 style={{ display: 'flex', alignItems: 'center', gap: 10 }}><MdTableChart size={24} className="section-icon" /> User Activity</h2>
      <UserTable />
    </div>
    <div className="card fade-in" style={{ animationDelay: '0.2s' }}>
      <h2 style={{ display: 'flex', alignItems: 'center', gap: 10 }}><MdPersonAdd size={24} className="section-icon" /> Add User</h2>
      <UserForm />
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
