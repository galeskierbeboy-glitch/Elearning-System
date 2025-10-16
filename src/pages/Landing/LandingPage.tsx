import React from "react";
import "./LandingPage.css";

const LandingPage: React.FC = () => {
  return (
    <>
      {/* 🧭 Top Navigation Bar */}
      <div className="top-app-bar">
        <div className="top-bar-content">
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
          </div>
        </div>
      </div>

      {/* 🏠 Main Landing Content */}
      <div className="landing-wrapper">
        <div className="left-section">
          <p className="intro-text">
            Empower your learning experience with our modern E-Learning System, designed to deliver accessible, interactive, 
            and secure education anytime, anywhere. Whether you’re a student, teacher, or administrator, our platform offers 
            seamless course management, progress tracking, and real-time communication tools — all within a safe digital environment.
          </p>

          <div className="account-text">
            <strong>Don’t have an account yet?</strong>
            <br />
            sign up now!
          </div>

          <div className="button-group">
            <a href="/signup" className="btn-signup">
              Sign Up!
            </a>
            <a href="/login" className="btn-login">
              Login
            </a>
          </div>
        </div>

        <div className="right-section">
          <div className="text-wrapper">
            <h1 className="title">
              Online <br /> learning
            </h1>
            <p className="subtitle">
              Join Us! Get high score and save your data safely.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
