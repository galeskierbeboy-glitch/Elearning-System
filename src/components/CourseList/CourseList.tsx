import React from 'react';
import './CourseList.css';

const CourseList = () => {
    const courses = [
        { id: 1, title: 'Introduction to Programming', author: 'John Doe' },
        { id: 2, title: 'Advanced React', author: 'Jane Smith' },
        { id: 3, title: 'Data Structures and Algorithms', author: 'Emily Johnson' },
    ];

    const [sortOption, setSortOption] = React.useState('All courses');

    const sortedCourses = sortOption === 'Newest courses' 
        ? courses.slice().reverse() 
        : courses;

    return (
        <div className="course-list">
            <div className="sorting-options">
                <button onClick={() => setSortOption('All courses')}>All courses</button>
                <button onClick={() => setSortOption('Newest courses')}>Newest courses</button>
            </div>
            <ul>
                {sortedCourses.map(course => (
                    <li key={course.id}>
                        <h3>{course.title}</h3>
                        <p>By: {course.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;