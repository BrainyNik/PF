import { FaLinkedinIn, FaGithub, FaKaggle } from "react-icons/fa";
import ParticlesContainer from "./ParticlesContainer";
import { motion } from "framer-motion";
export const HeroHeading = () => {
  const skills = ["Machine Learning", "Deep Learning", "NLP"];

  return (
    <div className="flex items-center justify-center md:min-h-[80vh] min-h-[65vh] flex-col gap-5  mb-10 text-center ">
      <div className="h-1 relative">
        {" "}
        <ParticlesContainer />
      </div>

      <motion.h1
        className="md:text-[6rem] text-6xl "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Haggra Nigga
      </motion.h1>

      <motion.div
        className="flex  gap-3 mb-3 md:gap-5 md:tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {skills.map((item, index) => {
          return (
            <p
              className={
                "md:text-2xl text-lg font-bold  pr-2 " +
                (index === skills.length - 1
                  ? " "
                  : " border-r-4 border-blue-600")
              }
              key={index}
            >
              {item}
            </p>
          );
        })}
      </motion.div>

      <motion.a
        className="bg-blue-600 p-3 px-9 rounded-md z-20 text-xl text-white font-semibold tracking-wide
        hover:text-black transition ease-in-out delay-250 duration-500 shadow-[0_10px_36px_rgba(0,0,0,0.5)] cursor-pointer  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Resume
      </motion.a>

      <motion.div className="home__links flex gap-10 justify-center items-center absolute bottom-20   text-3xl">
        <motion.a
          href="#"
          target="_blank"
          initial={{ opacity: 0, y: "-200px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            type: "spring",
            stiffness: 130,
          }}
        >
          <FaLinkedinIn />
        </motion.a>

        <motion.a
          href="#"
          target="_blank"
          initial={{ opacity: 0, y: "-200px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            type: "spring",
            stiffness: 130,
          }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="#"
          target="_blank"
          initial={{ opacity: 0, y: "-200px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            type: "spring",
            stiffness: 130,
          }}
        >
          <FaKaggle />
        </motion.a>
      </motion.div>
    </div>
  );
};
