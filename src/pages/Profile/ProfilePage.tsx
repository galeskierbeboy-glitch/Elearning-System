import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-content">
        <h1 className="profile-title">User Profile</h1>
        <div className="profile-card">
          <div className="profile-header">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="profile-avatar"
            />
            <div>
              <h2>John Doe</h2>
              <p className="profile-role">Student</p>
            </div>
          </div>
          <div className="profile-info-list">
            <div>
              <strong>Email:</strong> johndoe@example.com
            </div>
            <div>
              <strong>Joined:</strong> January 1, 2021
            </div>
            <div>
              <strong>Phone:</strong> +63 912 345 6789
            </div>
            <div>
              <strong>Birthday:</strong> December 25, 2000
            </div>
            <div>
              <strong>Address:</strong> 123 Main St, Manila, Philippines
            </div>
          </div>
          <div className="profile-actions">
            <button className="edit-btn">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;