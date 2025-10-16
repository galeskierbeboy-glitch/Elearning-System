import React from 'react';
import './NotificationPanel.css';

const NotificationPanel = () => {
    const notifications = [
        { id: 1, message: "Computer Science: Just a quick reminder that Module 5 Assignment is due today at 11:59 PM. Make sure you’ve uploaded your work on the system before the deadline to avoid late penalties.", date: "2025-10-01" },
        { id: 2, message: "EnviSci: Hello BSIT - 3B Just a quick reminder that Module 6 Assignment is due today at 11:59 PM. Make sure you’ve uploaded your work on the system before the deadline to avoid late penalties.", date: "2025-09-30" },
        { id: 3, message: "Graphic Design Hello BSIT - 3B Just a quick reminder that Module 7 Assignment is due today at 11:59 PM. Make sure you’ve uploaded your work on the system before the deadline to avoid late penalties.", date: "2025-09-29" },
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