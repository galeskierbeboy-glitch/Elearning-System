import Navbar from '../../components/Navbar/Navbar';
import CourseList from '../../components/CourseList/CourseList';
import NotificationPanel from '../../components/NotificationPanel/NotificationPanel';

import './Homepage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <Navbar />
            <div className="main-content">
                <div className="header-section">
                    <img src="/assets/wave.png" alt="Wave" className="wave-img" />
                    <div>
                        <h1>Welcome back!</h1>
                        <p>It's good to see you again.</p>
                    </div>
                </div>
                <div className="content-row">
                    <div className="course-list-container">
                        <CourseList />
                    </div>
                    <div className="notification-panel-container">
                        <NotificationPanel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;