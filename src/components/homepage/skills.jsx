import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMicrochip, faDraftingCompass, faTools } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";  // Update the path accordingly
import "./styles/skills.css";
const KeySkills = () => {
  return (
    <div className="key-skills">
      <Card
        icon={ <FontAwesomeIcon icon={faCode} />}
        title="Key Skills"
        body={
          <div>
            <div className="skill-category">
              <h3>
                <FontAwesomeIcon icon={faCode} /> Programming Languages
              </h3>
              <ul>
                <li>Python, C#</li>
                <li>C++</li>
                <li>Java</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>
                <FontAwesomeIcon icon={faMicrochip} /> Hardware
              </h3>
              <ul>
                <li>PCB Design</li>
                <li>Hydraulic and Pneumatic Systems</li>
                <li>Welding, Milling</li>
                <li>CNC Machine Operation</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>
                <FontAwesomeIcon icon={faDraftingCompass} /> Software
              </h3>
              <ul>
                <li>Unity Game Engine</li>
                <li>SolidWorks, Fusion360 [3D Design]</li>
                <li>Adobe Photoshop, Illustrator</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>
                <FontAwesomeIcon icon={faTools} /> Other
              </h3>
              <ul>
                <li>ROS</li>
                <li>Video Editing</li>
                <li>3D Printing</li>
                <li>Data Scraping and Analysis</li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default KeySkills;
