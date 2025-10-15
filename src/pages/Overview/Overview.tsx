import React from "react";
import "./Overview.css";

const OverviewPage: React.FC = () => {
  const progressItems = [
    { label: "Assignment", percent: 36 },
    { label: "Performance Task", percent: 87 },
    { label: "Quizzes", percent: 58 },
  ];

  const homeworkList = [
    { subject: "Computer Science", undone: "10 / 17 Task undone", progress: 20 },
    { subject: "EnviSci", undone: "10 / 17 Task undone", progress: 60 },
  ];

  return (
    <div className="overview-wrapper">
      {/* === MAIN CONTENT === */}
      <div className="overview-content">
        <h1 className="overview-title">Course Overview</h1>
        <p className="overview-subtitle">Your Progress</p>

        <div className="overview-main">
          {/* LEFT SIDE */}
          <div className="overview-left">
            <div className="progress-box">
              {progressItems.map(({ label, percent }) => (
                <div key={label} className="progress-item">
                  <div className="progress-label">
                    <span>{label}</span>
                    <span>{percent}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="overview-right">
            <div className="profile-card">
              <div className="profile-info">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="profile-pic"
                />
                <div>
                  <h4>Kerby Lhan Santiago</h4>
                  <p>Student</p>
                </div>
              </div>
            </div>

            <div className="stats-container">
              <div className="stat-card">
                <p>Quizzes</p>
                <div className="stat-icon">✔</div>
              </div>
              <div className="stat-card">
                <p>Assignment Done</p>
                <div className="stat-percent">75%</div>
              </div>
            </div>

            <h3 className="homework-title">Home Work</h3>
            {homeworkList.map(({ subject, undone, progress }) => (
              <div key={subject} className="homework-card">
                <div className="homework-info">
                  <p className="subject">{subject}</p>
                  <p className="task">{undone}</p>
                </div>
                <div className="progress-bar small">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;