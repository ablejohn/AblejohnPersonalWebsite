import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { FaMobile, FaLaptopCode } from "react-icons/fa";

const ProjectBox = ({
  projectPhoto,
  projectName,
  projectDesc,
  projectGithub,
  projectWebsite,
  category,
}) => {
  // Changed this to always show GitHub button
  // No conditional display based on "*" character
  return (
    <div className="projectBox">
      <div className="project-image-container">
        <img
          className="projectPhoto"
          src={projectPhoto}
          alt={`${projectName} project`}
        />
        <div className="category-badge">
          {category === "web" ? (
            <>
              <FaLaptopCode /> Web
            </>
          ) : (
            <>
              <FaMobile /> Mobile
            </>
          )}
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{projectName}</h3>
        <p className="project-description">{projectDesc}</p>

        <div className="project-links">
          <a
            href={projectGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <button className="projectbtn github-btn">
              <FaGithub /> Github
            </button>
          </a>

          <a
            href={projectWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-link"
          >
            <button className="projectbtn demo-btn">
              <CgFileDocument /> Demo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
