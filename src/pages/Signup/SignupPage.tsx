import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/signup-step2'); // ✅ Matches the route in App.tsx
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

      {/* === Create Account Form === */}
      <div className="create-account-container">
        <div className="create-account-box">
          <h2 className="title">Create Account</h2>

          <form onSubmit={handleSignup} className="form-container">
            {/* Left side */}
            <div className="form-left">
              <div className="form-group">
                <input type="text" placeholder="" required />
                <p>First Name</p>
              </div>

              <div className="form-group">
                <input type="text" placeholder="" required />
                <p>Last Name</p>
              </div>

              <div className="form-group">
                <input type="number" placeholder="" required />
                <p>Age</p>
              </div>

              <div className="form-group">
                <input type="text" placeholder="" required />
                <p>Address Country/City</p>
              </div>
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* Right side */}
            <div className="form-right">
              <div className="form-group">
                <input type="date" placeholder="yyyy/mm/dd" required />
                <p>yy/mm/dd</p>
              </div>

              <div className="form-group">
                <input type="text" placeholder="Male" />
                <p>Gender (Optional)</p>
              </div>

              <div className="form-group">
                <select required>
                  <option value="">Select Role</option>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Other">Other</option>
                </select>
                <p>Role</p>
              </div>

              <div className="button-container">
                <button type="submit">Next</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
