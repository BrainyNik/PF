import React from "react";
import ProjectCard from "./ProjectCard";
import anime from "../../assets/anime.jpg";
import empatt from "../../assets/empatt.jpg";
import filter from "../../assets/Filter-bro.png";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "ANIME RECOMMENDATION SYSTEM",
    description:
      "Find new anime to watch based on your interests and the anime you've already seen and the anime you like.",
    tags: ["NLP", "ML"],
    image: anime,
    githubLink: "#",
    demoLink: "#",
  },
  {
    title: "EMPLOYEE ATTRITION IBM (KAGGLE)",
    description:
      "Exploratory Data Analysis & Machine Learning Model which predicts Attrition of Employees based on the Key Features.",
    tags: ["EDP", "ML"],
    image: empatt,
    githubLink: "#",
    demoLink: "#",
  },
  {
    title: "AUTONOMOUS TEXT TAGGING SYSTEM",
    description:
      "A system that can automatically tag the text based on the content of the text.",
    tags: ["NLP", "Topic Modeling", "BERT"],
    image: filter,
    githubLink: "#",
    demoLink: "#",
  },
];

const Project = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });

  return (
    <div className="section px-8 md:px-[10em] flex flex-col gap-8">
      <h1 className="text-center text-4xl text-blue-700 font-bold" ref={ref}>
        Projects
      </h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          inView={inView}
          index={index}
        />
      ))}
    </div>
  );
};

export default Project;
