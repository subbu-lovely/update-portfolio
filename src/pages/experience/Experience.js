import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience-section">
      <h1 className="experience-title">Experience & Projects</h1>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>MERN Stack Developer</h3>
            <span>Self Projects</span>
            <p>
              Developed full stack applications using React, Node.js, Express
              and MongoDB.
            </p>
            <ul>
              <li>Function Hall Booking App (MERN)</li>
              <li>Restaurant Website with Firebase Orders</li>
              <li>Travel Planning Web Application</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>AI / ML Project</h3>
            <span>MCA Academic Project</span>
            <p>
              Mining Competitors from Large Unstructured Datasets using machine
              learning techniques and data analysis.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Verizon Cloud Platform Simulation</h3>
            <span>Forage | Aug 2024</span>
            <p>
              Built a hypothetical VPN product and tested cloud-native security
              architecture using Python.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
