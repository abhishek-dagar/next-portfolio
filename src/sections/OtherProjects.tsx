import Card from "@/components/Card";
import { otherProjects } from "@/data";
import React from "react";

function OtherProjects() {
  return (
    <div className="otherProjects">
      <div className="title">
        <span className="heading">Other Noteworthy Projects</span>
        <span className="subHeading">view the archive</span>
      </div>
      <ul className="project-grid">
        {otherProjects.map((project, index) => {
          return (
            <li key={index}>
              <Card project={project} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OtherProjects;
