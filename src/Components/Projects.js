import React from "react";
import ProjectBox from "./ProjectBox";
import EnlGOldImage from "../images/Enl Gold.jpg";
import BeezticImage from "../images/Beeztic.jpg";
import XchangeImage from "../images/Xchange.jpg";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My Latest<b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={EnlGOldImage} projectName="EnlGold" />
        <ProjectBox projectPhoto={BeezticImage} projectName="Beeztic" />
        <ProjectBox projectPhoto={XchangeImage} projectName="Xchangeunion" />
      </div>
    </div>
  );
};

export default Projects;
