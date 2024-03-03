import { FaPython, FaBrain, FaLanguage } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

import { HiMiniCircleStack } from "react-icons/hi2";
import img from "./Skills1.jpg";
import { motion } from "framer-motion";


const Skills = () => {
  const skills = [
    { name: "Python", icon: FaPython },
    { name: "SQL", icon: HiMiniCircleStack },
    { name: "Machine Learning", icon: FaGears },
    { name: "Deep Learning", icon: FaBrain },
    { name: "Natural Language Processing", icon: FaLanguage },
  ];

  return (
    <div className="px-8 md:px-[8rem] text-center section  " id="skills">
      <div className="text-4xl font-bold text-blue-700 ">Skills</div>

      <div className="flex  flex-col ">
        <h1 className="font-bold text-2xl my-8 w-full ">Technical Skills</h1>
        <motion.div className="flex-col  w-[100%] justify-center items-center sm:flex sm:flex-row  sm:gap-12 sm:px-5" 
        initial={{opacity:0, x:'-100vw'}} animate={{opacity:1, x:0, }} transition={{delay:0.5, duration:0.8, type:'spring', stiffness:100}} >
          <div className="flex flex-col  w-full sm:w-[50%]">
            {skills.map((skill, index) => (
              <div key={index} className=" skills ">
                <skill.icon />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="w-full h-[320px] md:w-[320px] hidden sm:flex">
            <img src={img} alt="skills-img" className="rounded-lg w-[320px]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
