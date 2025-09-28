
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // For demo/interface only: allow any signup
        navigate('/login');
    };

    return (
        <div className="signup-container">
            <h2>Create an Account</h2>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
    );
};

export default SignupPage;