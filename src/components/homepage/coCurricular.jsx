// CoCurricular.js
import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/coCurricular.css";

const CoCurricular = () => {
  return (
    <div className="co-curriculars">
      <Card
        icon=""
        title="Co-Curricular"
        body={
          <>
            <div className="co-curricular">
              <div className="co-curricular-title">President | Robotics Club of Brac University</div>
              <div className="co-curricular-subtitle">January 2019 - June 2020</div>
            
            </div>

            <div className="Co-Curricular">
              <div className="co-curricular-title">Team Lead | BRACU DUBURI</div>
              <div className="co-curricular-subtitle">May 2019 – January 2021</div>
             
            </div>

            {/* Add other co-curricular activities here */}
          </>
        }
      />
    </div>
  );
};

export default CoCurricular;
