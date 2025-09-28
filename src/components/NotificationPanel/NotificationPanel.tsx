import React from 'react';
import './NotificationPanel.css';

const NotificationPanel = () => {
    const notifications = [
        { id: 1, message: "New course available: React Basics", date: "2023-10-01" },
        { id: 2, message: "Your assignment has been graded", date: "2023-09-30" },
        { id: 3, message: "Upcoming webinar on JavaScript", date: "2023-09-29" },
    ];

    return (
        <div className="notification-panel">
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>
                        <p>{notification.message}</p>
                        <span>{notification.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationPanel;