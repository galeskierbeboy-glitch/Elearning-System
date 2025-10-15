import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupStep2 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Account Successfully Created'); // optional success message
    navigate('/login'); // ✅ Redirect to LoginPage.tsx
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
          <button className="login-button" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </div>

      {/* === Create Account Step 2 === */}
      <div className="create-account-container">
        <div className="create-account-box">
          <h2 className="title">Create Account</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
              <p>Email</p>
            </div>

            <div className="form-group">
              <input type="password" placeholder="Password" required />
              <p>Password</p>
            </div>

            <div className="form-group">
              <input type="text" placeholder="ID" required />
              <p>Student ID</p>
            </div>

            <div className="button-container">
              <button
                type="button"
                className="back-button"
                onClick={() => navigate(-1)}
                style={{
                  backgroundColor: '#444',
                  color: '#fff',
                  borderRadius: '25px',
                  padding: '10px 25px',
                  marginRight: '10px',
                  cursor: 'pointer',
                }}
              >
                ← Back
              </button>

              <button
                type="submit"
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '10px 30px',
                  cursor: 'pointer',
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupStep2;
