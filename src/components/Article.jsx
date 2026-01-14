import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { discord} from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import {article } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Spline from '@splinetool/react-spline';


const ProjectCard = ({
  index,
  // name,
  // description,
  // tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="mt-1 flex flex-wrap justify-center items-center text-center gap-4">
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-[20px] sm:w-[400px] w-full border-x-1.5 border-b-2 border-cyan-300 shadow-[#00ECFE]/20 full p-[10px] rounded-[10px] shadow-card center   p-5 rounded-2xl sm:w-[300px] w-full gab-20"
      >
        <div className="relative w-full h-[320px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl shadow-[#00ECFE]/20 text-center gap-4"
          />
          <div className="mt-1 flex flex-wrap justify-center gab-30 ">
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover rounded-2xl gab-200">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="gradient w-16 h-16 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                // src={discord}
                // alt="github"
                // className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-orange-400 font-bold text-[15px]">{name}</h3>
          {/* <p className="mt-2 text-cyan-900 text-[12px]">{description}</p> */}
        </div>
        <div className="mt-5 flex flex-wrap gap-1 text-center items-center justify-center gab-100">
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

const Article = () => {
  return (
    <>
      <div className="mt-5 flex flex-wrap justify-center text-center items-cente justify-center gab-30">
      <motion.div variants={textVariant()}>
        {/* <h2 className={styles.sectionHeadText}>Manzel Articles.</h2> */}
        {/* <p className={styles.sectionSubText}> Our daily Blogs and players "Student" works join us/ <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white" >
          Comming Soon.</span>
        </p> */}
        
      </motion.div>
      </div>
      
      <div className="mt-1 bg-hero bg-cover bg-no-repeat bg-center bg-shadow-[#67e8f9]/20 leading-[1px] gab-100">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[18x] max-w-3xl leading-[0px]"
        >
          <Spline scene="https://prod.spline.design/IxzQZUwfs7Rbb7v8/scene.splinecode" />

        </motion.p>
        
      </div>
      <div className="mt-1 flex flex-wrap justify-center  gab-50">
      <a
          href="https://www.linkedin.com/company/akin-manzel/"
          id="button-secondry"
          className=" animate-slideleftT4 pg-cyan-300 px-[30x] py-[7px] cursor-pointer hover:scale-105 active:scale-90 hover  duration-150 select-none rounded-[px]  hover: border-indigo-cyan-300 hover:bg-shadow-[#67e8f9]/50  font-bold py- px-10 border-b-2 border-cyan-300 hover:border-orange-500 px-[20px] py-[10px] rounded-[9px]  hover: text-cyan-300 shadow-lg shadow-[#67e8f9]/50 justify-center "
          
        >
          Read more
          </a>
          {/* <a
          href="#Section_4"
          id="button-secondry"
          className=" animate-slideleftT4 px-[40x] py-[10px] cursor-pointer hover:scale-105 active:scale-90 hover  duration-150 select-none rounded-[px]  hover: border-indigo-cyan-300 hover:bg-shadow-[#67e8f9]/50  font-bold py-2 px-10 border-b-2 border-cyan-300 hover:border-orange-500 px-[20px] py-[10px] rounded-[9px]  hover: text-cyan-300 shadow-lg shadow-[#67e8f9]/50 justify-center "
          
        >
          Start Playing
          </a> */}
      </div>
      <div className="mt-20 flex flex-wrap gap-20 justify-center">
        {article.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      
    </>
    
  );
};


export default SectionWrapper(Article);
