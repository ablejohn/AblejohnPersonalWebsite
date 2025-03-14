import React, { useState } from "react";
import ProjectBox from "./ProjectBox";
import EnlGOldImage from "../images/Enl Gold.PNG";
import DesignStudio from "../images/Design studio.PNG";
import ACE from "../images/Ace Concept.PNG";
import Com4thPlus from "../images/Com4thPlus.PNG";
import Travel from "../images/Plan your Travel.PNG";
import TRGENT from "../images/trgent.PNG";
import "./project.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 4,
      photo: Com4thPlus,
      name: "Com4thPlus",
      category: "web",
      desc: "A Website Built for an Airbnb Company to let out their properties to the public. The website was built using React and Node.js.",
      github: "https://github.com/ablejohn/Com4thPlus", // Added GitHub link
      website: "https://com4thplus.net/",
    },
    {
      id: 6,
      photo: TRGENT,
      name: "TRG-ENT",
      category: "web",
      desc: "A website built for an Entertainment Company to showcase their services and talents. The website was built using React and Node.js.",
      github: "https://github.com/ablejohn/TRG-Entertainment", // Added GitHub link
      website: "https://www.trgentertainment.com/",
    },
    {
      id: 3,
      photo: ACE,
      name: "ACE Concept",
      category: "web",
      desc: "A website built for an Event Planning Company to showcase their services and recent EventsThe Website was built using React and Node.js",
      github: "https://github.com/ablejohn/ACE-Concept", // Added GitHub link
      website: "https://aceconcept.vercel.app/",
    },
    {
      id: 5,
      photo: Travel,
      name: "Plan Your Travel",
      category: "web",
      desc: "A Website that helps you plan your Travel and Vacation. The website was built using React and Node.js.",
      github: "https://github.com/ablejohn/TravelPlanner", // Added GitHub link
      website: "hhttps://travel-planner-hazel.vercel.app/",
    },

    {
      id: 1,
      photo: EnlGOldImage,
      name: "EnlGold",
      category: "web",
      desc: "A Website built for a Gold Company to showcase their products and services. The website was built using html, Css and JavaScript &Php",
      github: "https://github.com/ablejoh/enlgold-project",
      website: "https://enlgoldproject.com.ng/",
    },
    {
      id: 2,
      photo: DesignStudio,
      name: "DesignStudio",
      category: "web",
      desc: "A Replica of Canva.com still in Production",
      github: "https://github.com/ablejohn/designstudio",
      website: "https://designstudio-one.vercel.app/",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projectHeading">
          My Latest <b>Projects</b>
        </h1>
        <p className="project-subtitle">
          Here are some of my recent work that showcase my skills and experience
        </p>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === "web" ? "active" : ""}`}
            onClick={() => setFilter("web")}
          >
            Web Development
          </button>
          {/* <button
            className={`filter-btn ${filter === "mobile" ? "active" : ""}`}
            onClick={() => setFilter("mobile")}
          >
            Mobile Development 
          </button> */}
        </div>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectBox
            key={project.id}
            projectPhoto={project.photo}
            projectName={project.name}
            projectDesc={project.desc}
            projectGithub={project.github}
            projectWebsite={project.website}
            category={project.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
