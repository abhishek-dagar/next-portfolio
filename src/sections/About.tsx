import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { technologies } from "@/data";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    // console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Meet Me, a software engineer at Infosys with a deep expertise in
            full-stack web development across various technology stacks. My
            tenure at Infosys has fine-tuned my skills to excel in the
            ever-evolving digital landscape, where innovation and excellence are
            the guiding principles.
          </p>
          <p className="about-grid-info-text">
            {`I am versatile expert in both front-end and back-end development,
            crafting captivating user interfaces and architecting robust server
            systems. Their vision and proficiency make them a driving force
            behind innovative web solutions, sculpting the digital future
            through each line of code.`}
          </p>
          <p className="about-grid-info-text">
            {`Join me at the forefront of tech evolution, where I embrace new
            challenges, enriching Infosys and the broader tech community. Let's
            bring your ideas to life, one line of code at a time.`}
          </p>
          <p className="about-grid-info-text">
            {`Here are a few technologies I've been working with recently:`}
          </p>
          <ul className="about-grid-info-list">
            {technologies.map((tech: any) => {
              return (
                <li key={tech.id} className="about-grid-info-list-item">
                  {tech.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/profile.webp" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
