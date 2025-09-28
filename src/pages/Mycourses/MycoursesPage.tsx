import React from 'react';
import './MyCoursesPage.css';
import BackButton from '../../components/BackButton';

const MyCoursesPage = () => {
    return (
        <div className="my-courses-page">
            <BackButton />
            <h1>My Courses</h1>
            <div className="courses-list">
                {/* This is where the list of courses will be rendered */}
            </div>
        </div>
    );
};

export default MyCoursesPage;