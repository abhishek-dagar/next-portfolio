import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { projectsData } from "@/data";

function Projects() {
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image
                      src={"/project-screenshots" + image}
                      fill
                      alt={projectName}
                      quality={100}
                    />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
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
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
