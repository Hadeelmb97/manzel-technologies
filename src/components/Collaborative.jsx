import Tilt from "react-tilt";
import { motion, AnimatePresence  } from "framer-motion";

import { styles } from "../styles";
// import { discord} from "../assets";
 import { SectionWrapper } from "../hoc";
import { image } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { feature } from "../constants";


const ProjectCard = ({
  index,
  name,

  
  image,
}) => {
  return (
    <div className="mt-10 flex flex-wrap justify-center ">
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className=" bgbg-#070713 p-1 rounded-2xl sm:w-[250px] border-x-1 border-b-2 border-cyan-300 shadow-[#00ECFE]/30  "
      >
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-0">
        </div>
      </Tilt>
    </motion.div>
    </div>
  );
};

const Collaborative = () => {
  return (
    <>
       <div className="mt-10 flex flex-wrap justify-center">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Our Collaborative & Clinets</h2>
        <p className={styles.sectionSubText}> Become one of them now !!
        </p>
        
      </motion.div>
      </div>
      
      
      
      <div className="mt-10 flex flex-wrap gap-2 justify-center">
        {image.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      
    </>
    
  );
};
const Card = ({
  index,
  name,
  description,
  // tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="mt-0 flex flex-wrap justify-center">
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-#070713 p-5 rounded-[15px] sm:w-[950px] w-full border-x-1 border-b-2 border-cyan-300 shadow-[#00ECFE]/20 full p-[10px]  shadow-card center p-5  sm:w-[500px] w-full>  "
      >
        <div className="relative w-full h-[250px]  rounded-[20px] ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="mt-0 flex flex-wrap justify-center  ">
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-cyan- font-bold text-[16px] flex-wrap justify-center text-center ">{name}</h3>
          <p className="mt-2 text-cyan-900 text-[ 18px-center max-w-4xl leading-[30px]">{description}</p>
        </div>
        {/* <div className="mt-0 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div> */}
      </Tilt>
    </motion.div>
    </div>
  );
};


export default SectionWrapper(Collaborative, "");
