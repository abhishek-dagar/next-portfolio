import Link from "next/link";
import React from "react";
import { BsFolder2Open } from "react-icons/bs";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Card = ({ project }: any) => {
  const { projectName, projectDescription, projectTech, projectExternalLinks } =
    project;
  return (
    <div className="card">
      <header>
        <div className="project-top">
          <div className="folder">
            <BsFolder2Open />
          </div>
          <ul className="project-info-links">
            {projectExternalLinks.github &&
              projectExternalLinks.github !== "" && (
                <li className="project-info-links-item">
                  <Link
                    href={projectExternalLinks.github}
                    className="project-info-links-item-link"
                    target="_blank"
                  >
                    <FiGithub />
                  </Link>
                </li>
              )}
            {projectExternalLinks.externalLink &&
              projectExternalLinks.externalLink !== "" && (
                <li className="project-info-links-item">
                  <Link
                    href={projectExternalLinks.externalLink}
                    className="project-info-links-item-link"
                    target="_blank"
                  >
                    <FiExternalLink />
                  </Link>
                </li>
              )}
          </ul>
        </div>
        <div className="project-title">
          <span>{projectName}</span>
        </div>
        <div className="project-description">
          <p>{projectDescription}</p>
        </div>
      </header>
      <footer>
        <ul className="project-info-tech-list">
          {projectTech.map((tech: any) => (
            <li className="project-info-tech-list-item" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Card;
