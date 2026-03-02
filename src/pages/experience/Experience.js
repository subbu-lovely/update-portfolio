import React from "react";
import "./Experience.css"; // If CSS file exists (optional)

function Experience(props) {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1 style={{ fontSize: "40px" }}>Experience</h1>

      <div style={{ marginTop: "30px" }}>
        <h3>MERN Stack & AI/ML Projects</h3>
        <p>Worked on multiple full stack development projects including:</p>

        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>✔ Function Hall Booking Application (MERN Stack)</li>
          <li>✔ Daily Tracker Restaurant Website</li>
          <li>✔ AI/ML based Data Mining Project</li>
        </ul>

        <p style={{ marginTop: "20px" }}>
          Passionate about building scalable web applications and intelligent
          systems.
        </p>
      </div>
    </div>
  );
}

export default Experience;
