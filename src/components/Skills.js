import React from "react";
import "./Skills.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faJsSquare,
//   faHtml5,
//   faCss3Alt,
//   faReact,
//   faJava,
// } from "@fortawesome/free-brands-svg-icons";
// import { faCogs, faTools } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  return (
    <div className="row skill-container">
      <div className="col-md-3 col-lg-3"></div>
      <div className="col-md-6 col-lg-16">
        <div className="skills-container">
          <h2>Skills / Exposure</h2>
          <div className="skills-section">
            <h3>Architecture & Methodology</h3>
            <ul>
              <li>Component based architecture</li>
              <li>Agile methodology</li>
              <li>MVC</li>
              <li>Methodology/Approach</li>
            </ul>
          </div>
          <div className="skills-section">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>VS Code</li>
              <li>Eclipse</li>
              <li>STS</li>
              <li>Postman</li>
              <li>Chrome Dev Tools</li>
            </ul>
          </div>
          <div className="skills-section">
            <h3>Technologies</h3>
            <ul>
              <li>
                <i class="fab fa-java"> java </i> i think this classes are not
                proper seems
                <i class="fa fa-car"></i>
                {/* <FontAwesomeIcon icon={faJsSquare} /> JavaScript */}
              </li>
              <li>
                {/* <FontAwesomeIcon icon={faHtml5} /> HTML5 */}{" "}
                <i class="fab fa-react"></i>
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/office/480/react.png"
                  alt="react"
                />
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/color/480/java-coffee-cup-logo--v1.png"
                  alt="java-coffee-cup-logo--v1"
                />
              </li>
              {/* 
              <li>
                <FontAwesomeIcon icon={faCss3Alt} /> CSS
              </li>
              <li>
                
                <FontAwesomeIcon icon={faReact} /> React
              </li>
              <li>
                <FontAwesomeIcon icon={faJava} /> SpringBoot
              </li>
              <li>
                <FontAwesomeIcon icon={faJava} /> Java
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-lg-3"></div>
    </div>
  );
};

export default Skills;
