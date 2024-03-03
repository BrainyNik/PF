import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ project, inView, index }) => {
  const { title, description, tags, image, githubLink, demoLink } = project;

  return (
    <motion.div
      className="card1 card box-shadow rounded-lg p-3 flex-col items-center gap-4 md:flex md:flex-row"
      initial={{ opacity: 0, x: "-100vw" }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100vw" }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
    >
      <div
        className={`w-full md:w-[50%] h-[400px] rounded-2xl overflow-hidden 
        box-shadow`}
      >
        <img src={image} alt={title} />
      </div>
      <div className="flex flex-col items-center mt-4 justify-center md:w-[50%]">
        <h1 className="md:text-2xl font-bold mb-3 text-xl text-center">
          {title}
        </h1>
        <p className="text-center text-xl p-5 md:px-[7em]">{description}</p>
        <div className="flex gap-6 mb-9">
          {tags.map((tag, index) => (
            <div key={index} className="box-shadow p-3 rounded-2xl">
              <p>{tag}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-10">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl flex gap-3"
          >
            Code <FaGithub />
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex gap-3"
            >
              Demo <FaLink />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
