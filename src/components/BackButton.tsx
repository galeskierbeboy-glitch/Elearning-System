import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <button
            style={{
                marginBottom: '20px',
                padding: '8px 16px',
                backgroundColor: '#34495e',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
            onClick={() => navigate('/home')}
        >
            Back to Home
        </button>
    );
};

export default BackButton;