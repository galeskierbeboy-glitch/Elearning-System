import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/home'); // ✅ Redirect after login
  };

  return (
    <>
      {/* === Top App Bar === */}
      <div className="top-app-bar">
        <div className="top-bar-content">
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
          </div>
        </div>
      </div>

      {/* === Login Form === */}
      <div className="create-account-container">
        <div className="create-account-box">
          <h2 className="title">Login to Your Account</h2>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p>Email</p>
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p>Password</p>
            </div>

            <div className="button-container">
              <button type="submit" className="form-login-button">
                Login
              </button>
              <button
                type="button"
                className="form-signup-button"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
