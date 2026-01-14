import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { discord} from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="mt-5 flex flex-wrap justify-center items-center text-center">
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-white-gradient p-[3px] rounded-[15px] shadow-card center shadow-[#00ECFE]/10 p-5 rounded-2xl sm:w-[160px] w-full shadow-[#00ECFE]/20 justify-center text-center"
      >
        <div className="relative w-full h-[250px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl shadow-[#00ECFE]/20 text-center"
          />
          <div className="mt-5 flex flex-wrap justify-center  ">
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover rounded-2xl">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer"
            >
              {/* <img
                src={discord}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              /> */}
            </div>
          </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-orange-400 font-bold text-[15px]">{name}</h3>
          <p className="mt-2 text-cyan-900 text-[12px]">{description}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-1 text-center items-center justify-center">
          {/* {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))} */}
        </div>
      </Tilt>
    </motion.div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div className="mt-5 flex flex-wrap justify-center text-center items-center">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Manzel Community.</h2>
        <p className={styles.sectionSubText}> Our daily Blogs and players "Student" works join us/ <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white" >
          Comming Soon.</span>
        </p>
        
      </motion.div>
      </div>
      
      <div className="mt-5 flex flex-wrap justify-center items-center text-center ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[18x] max-w-3xl leading-[30px]"
        >
           Students have joined the Game! Have a look at their works, share your's work, and join us now.
        </motion.p>
        
      </div>
      <div className="mt-7 flex flex-wrap justify-center  gap-10">
      <a
          href="https://discord.gg/xBC5v8gYk6"
          id="button-secondry"
          className=" animate-slideleftT4 pg-cyan-300 px-[30x] py-[7px] cursor-pointer hover:scale-105 active:scale-90 hover  duration-150 select-none rounded-[px]  hover: border-indigo-cyan-300 hover:bg-shadow-[#67e8f9]/50  font-bold py- px-10 border-b-2 border-cyan-300 hover:border-orange-500 px-[20px] py-[10px] rounded-[9px]  hover: text-cyan-300 shadow-lg shadow-[#67e8f9]/50 justify-center "
          
        >
          Join us now
          </a>
          {/* <a
          href="#Section_4"
          id="button-secondry"
          className=" animate-slideleftT4 px-[40x] py-[10px] cursor-pointer hover:scale-105 active:scale-90 hover  duration-150 select-none rounded-[px]  hover: border-indigo-cyan-300 hover:bg-shadow-[#67e8f9]/50  font-bold py-2 px-10 border-b-2 border-cyan-300 hover:border-orange-500 px-[20px] py-[10px] rounded-[9px]  hover: text-cyan-300 shadow-lg shadow-[#67e8f9]/50 justify-center "
          
        >
          Start Playing
          </a> */}
      </div>
      <div className="mt-20 flex flex-wrap gap-4 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      
    </>
    
  );
};


export default SectionWrapper(Works, "");
