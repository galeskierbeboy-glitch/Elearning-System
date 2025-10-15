import React, { useState } from "react";
import "./SettingsPage.css";

const SettingsPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [accentColor, setAccentColor] = useState("#6c63ff");
  const [emailNotif, setEmailNotif] = useState(true);
  const [taskNotif, setTaskNotif] = useState(true);
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("Asia/Manila");
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="settings-wrapper">
      {/* === MAIN SETTINGS CONTENT === */}
      <div className="settings-content">
        <h1 className="settings-title">Settings</h1>

        <div className="settings-card">
          <h3>Account Settings</h3>
          <label>Full Name</label>
          <input type="text" placeholder="Kerby Santiago" />
          <label>Email</label>
          <input type="email" placeholder="kerby@example.com" />
          <label>Change Password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <div className="settings-card">
          <h3>Notifications</h3>
          <div className="toggle-group">
            <label>
              <input
                type="checkbox"
                checked={emailNotif}
                onChange={() => setEmailNotif(!emailNotif)}
              />
              Email Notifications
            </label>
          </div>
          <div className="toggle-group">
            <label>
              <input
                type="checkbox"
                checked={taskNotif}
                onChange={() => setTaskNotif(!taskNotif)}
              />
              Task Reminders
            </label>
          </div>
        </div>

        <div className="settings-card">
          <h3>Appearance</h3>
          <div className="toggle-group">
            <label>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              Dark Mode
            </label>
          </div>
          <div className="color-picker">
            <label>Accent Color</label>
            <input
              type="color"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
            />
          </div>
        </div>

        <div className="settings-card">
          <h3>System Settings</h3>
          <label>Language</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option>English</option>
            <option>Filipino</option>
            <option>Spanish</option>
          </select>

          <label>Timezone</label>
          <select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
            <option>Asia/Manila</option>
            <option>Asia/Tokyo</option>
            <option>America/New_York</option>
          </select>
        </div>

        <div className="settings-card">
          <h3>Privacy & Security</h3>
          <div className="toggle-group">
            <label>
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={() => setTwoFactor(!twoFactor)}
              />
              Enable Two-Factor Authentication
            </label>
          </div>
          <button className="delete-btn">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;