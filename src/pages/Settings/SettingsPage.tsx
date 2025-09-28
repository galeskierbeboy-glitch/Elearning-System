import React from 'react';
import './SettingsPage.css';
import BackButton from '../../components/BackButton';

const SettingsPage = () => {
    return (
        <div className="settings-page">
            <BackButton />
            <h1>Account Settings</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default SettingsPage;