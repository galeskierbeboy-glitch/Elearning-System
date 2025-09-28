import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';
import SignupPage from './pages/Signup/SignupPage';
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';
import SettingsPage from './pages/Settings/SettingsPage';
import MyCoursesPage from './pages/MyCourses/MyCoursesPage';
import OverviewPage from './pages/Overview/Overview';
import ProfilePage from './pages/Profile/ProfilePage';
import NotificationPage from './pages/Notification/NotificationPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/my-courses" element={<MyCoursesPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notifications" element={<NotificationPage />} />
      </Routes>
    </Router>
  );
};

export default App;