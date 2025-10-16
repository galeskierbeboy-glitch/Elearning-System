import React, { useState } from 'react';
import './CourseList.css';

const CourseList = () => {
  const courses = [
    {
      id: 1,
      title: 'Computer Science',
      author: 'John Francis Molaque',
      image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    },
    {
      id: 2,
      title: 'Graphic Design',
      author: 'CoooooOooooolita',
      image: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
    },
    {
      id: 3,
      title: 'Understanding The Self',
      author: 'Akon',
      image: 'https://cdn-icons-png.flaticon.com/512/921/921490.png',
    },
    {
      id: 4,
      title: 'Art App',
      author: 'Kerbaby',
      image: 'https://cdn-icons-png.flaticon.com/512/1055/1055646.png',
    },
    {
      id: 5,
      title: 'EnviSci',
      author: 'Crystal Salem',
      image: 'https://cdn-icons-png.flaticon.com/512/1183/1183669.png',
    },
    {
      id: 6,
      title: 'Data Structure and Algorithm',
      author: 'Albert Einstein',
      image: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    },
  ];

  const [sortOption, setSortOption] = useState('All Courses');
  const sortedCourses = sortOption === 'Newest' ? [...courses].reverse() : courses;

  return (
    <div className="courses-container">
      <h2 className="courses-title">Courses</h2>

      <div className="filter-options">
        <button
          className={sortOption === 'All Courses' ? 'active' : ''}
          onClick={() => setSortOption('All Courses')}
        >
          All Courses
        </button>
        <button
          className={sortOption === 'Newest' ? 'active' : ''}
          onClick={() => setSortOption('Newest')}
        >
          Newest
        </button>
      </div>

      <div className="course-list">
        {sortedCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-img" />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>By {course.author}</p>
            </div>
            <button className="view-btn">View Courses</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
