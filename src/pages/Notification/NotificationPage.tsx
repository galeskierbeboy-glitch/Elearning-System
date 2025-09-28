import React from 'react';
import './NotificationPage.css';

const NotificationPage = () => {
    return (
        <div className="notification-page">
            <h1>Notifications</h1>
            <div className="notification-list">
                <div className="notification-item">
                    <p>You have a new message from your instructor.</p>
                </div>
                <div className="notification-item">
                    <p>Your assignment has been graded.</p>
                </div>
                <div className="notification-item">
                    <p>A new course has been added to your recommendations.</p>
                </div>
                <div className="notification-item">
                    <p>Your profile has been updated successfully.</p>
                </div>
                <div className="notification-item">
                    <p>Don't forget to check your upcoming deadlines!</p>
                </div>
            </div>
        </div>
    );
};

export default NotificationPage;