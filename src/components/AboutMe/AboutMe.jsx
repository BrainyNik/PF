import img from "./davai.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });

  const containerVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 110 },
    },
  };

  return (
    <div
      className="flex flex-col section py-10 md:h-[500px]"
      id="about"
      ref={ref}
    >
      <div className="text-4xl font-bold text-blue-700 p-10 text-center">
        About Me
      </div>
      <motion.div
        className="flex flex-col items-center justify-center gap-14 md:flex md:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="w-[350px] h-[300px]">
          <img
            src={img}
            alt="profile-img"
            className="border-2 border-black custom-morph w-full h-full"
          />
        </div>
        <div className="w-[100%] px-1 text-xl text-center md:w-[50%] md:px-[9em]">
          <p>
            I am a Data Science and a Machine Learning enthusiast. I am
            currently pursuing my Master's in Data Science from Fergusson
            College, Pune. I am a quick learner and a team player. I am always
            open to new opportunities and challenges. If you don't find me
            coding or learning new things, you will find me playing basketball
            or watching anime.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
