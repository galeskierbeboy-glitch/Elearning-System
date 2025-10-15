import React from 'react';
import './MyCoursesPage.css';

const courses = [
  {
    title: "Computer Science",
    teacher: "Kizmark Velezno",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "EnviSci",
    teacher: "Crystal Salem",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Understanding The Self",
    teacher: "Jasent Block",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "ArtApp",
    teacher: "Kerbaby",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  },
];

const MyCoursesPage = () => {
  return (
    <div className="my-courses-page">
      <h1 className="enrolled-title">Enrolled Courses</h1>
      <div className="recent-label">Recent Enrolled Courses ({courses.length})</div>
      <div className="courses-list">
        {courses.map((course, idx) => (
          <div className="course-card" key={idx}>
            <div className="course-img-wrap">
              <img src={course.image} alt={course.title} className="course-img" />
            </div>
            <div className="course-info">
              <div className="course-title">{course.title}</div>
              <div className="course-teacher">Course by {course.teacher}</div>
            </div>
            <div className="course-actions">
              <span className="dots">⋯</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCoursesPage;