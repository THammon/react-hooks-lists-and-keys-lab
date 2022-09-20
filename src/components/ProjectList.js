import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ProjectItem project = {projects[1]}/>
        <ProjectItem project = {projects[2]}/>
        <ProjectItem project = {projects[3]}/>
      </div>
    </div>
  );
}

export default ProjectList;
