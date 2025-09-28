import React from 'react';
import './ProfilePage.css';
import BackButton from '../../components/BackButton';

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <BackButton />
            <h1>User Profile</h1>
            <div className="profile-info">
                <h2>Profile Information</h2>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> johndoe@example.com</p>
                <p><strong>Joined:</strong> January 1, 2021</p>
            </div>
            <div className="profile-actions">
                <button>Edit Profile</button>
                <button>Change Password</button>
            </div>
        </div>
    );
};

export default ProfilePage;