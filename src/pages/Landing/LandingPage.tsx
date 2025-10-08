import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <h1>Welcome to the eLearning System</h1>
            <p>Your journey to knowledge starts here.</p>
            <a href="/signup" className="btn">SignUp</a>
            <a href="/login" className="btn">Login</a>
        </div>
    );
};


export default LandingPage;
