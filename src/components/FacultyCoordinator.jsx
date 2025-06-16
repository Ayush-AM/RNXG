import React from "react";
import "./FacultyCoordinator.css";

const FacultyCoordinator = () => {
  return (
    <div className="mentor-wrapper">
      <div className="mentor-card">
        <div className="mentor-left">
          <img
            src="/images/bhaleraoSir.png"
            alt="Dr. Milind V. Bhalerao"
            className="mentor-image"
          />
          <div className="mentor-name">Dr. Milind V. Bhalerao</div>
          <div className="mentor-role">Faculty Coordinator & Mentor</div>
        </div>

        <div className="mentor-right">
          <h2 className="mentor-title">Dr. Milind V. Bhalerao</h2>
          <div className="underline border-1 border-white"></div>
          <p className="mentor-quote">
            <i>
              “RNXG is a hub for robotics and innovation—a space where ideas
              turn into real projects. Open to all branches, it fosters
              teamwork, discipline, and hands-on learning. From AI to embedded
              systems, members grow by building, failing, and succeeding
              together. Backed by a strong alumni network, RNXG helps students
              dream big and go beyond books.”
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyCoordinator;
