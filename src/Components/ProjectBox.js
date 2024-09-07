import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    EnlGoldDesc:
      "Crafted the entire website from concept to launch, ensuring it effectively represented the company's brand and met all business requirements. ",
    EnlGOldGithub: "*",
    EnlGOldWebsite: "https://enlgoldproject.com.ng/",

    BeezticDesc:
      "As a front-end developer at Beeztic, I played a key role in designing and developing the user interface for our web applications.",
    BeezticGithub: "*",
    BeezticWebsite: "https://beeztic.com/",

    XchangeunionDesc:
      "As a full-stack developer at Xchange Union, I took on a comprehensive role in both frontend and back-end development of our web applications.",
    XchangeunionGithub: "*",
    XchangeunionWebsite: "https://xchangeunion.com/",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
