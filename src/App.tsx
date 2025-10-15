import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';
import SignupPage from './pages/Signup/SignupPage';
import SignupStep2 from './pages/Signup/SignupStep2';
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/Homepage';
import SettingsPage from './pages/Settings/SettingsPage';
import MyCoursesPage from './pages/MyCourses/MyCoursesPage';
import OverviewPage from './pages/Overview/Overview';
import ProfilePage from './pages/Profile/ProfilePage';
import NotificationPage from './pages/Notification/NotificationPage';
import DashboardLayout from './layouts/DashboardLayout';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup-step2" element={<SignupStep2 />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard pages share one layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/my-courses" element={<MyCoursesPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notifications" element={<NotificationPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
