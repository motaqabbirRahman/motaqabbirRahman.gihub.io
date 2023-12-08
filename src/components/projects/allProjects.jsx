// AllProjects.jsx
import React from "react";
import Project from "./project";
import { Link } from "react-router-dom";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
  return (
    <div className="all-projects-container">
      {INFO.projects.map((project, index) => (
        <div className="all-projects-project" key={index}>
          {/* Use Link component to generate project links */}
          <Link to={`/details/${project.id}`}> </Link>
            <Project
              id={project.id}
              logo={project.logo}
              title={project.title}
              // description={project.description}
              linkText={project.linkText}
            />
         
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
