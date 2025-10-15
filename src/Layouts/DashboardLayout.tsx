// src/layouts/DashboardLayout.tsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./DashboardLayout.css";

const DashboardLayout: React.FC = () => {
  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <nav className="sidebar">
        <ul>
          <li>
            <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-courses" className={({ isActive }) => (isActive ? "active" : "")}>
              My Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/overview" className={({ isActive }) => (isActive ? "active" : "")}>
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
              Profile
            </NavLink>
          </li>
          <li className="logout">
            <NavLink to="/login">Logout</NavLink>
          </li>
        </ul>
      </nav>

      {/* Main Page Area */}
      <div className="dashboard-content">
        <Outlet /> {/* 👈 This is where each page renders */}
      </div>
    </div>
  );
};

export default DashboardLayout;
