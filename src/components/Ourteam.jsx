import Tilt from "react-tilt";
import { motion, AnimatePresence  } from "framer-motion";

import { styles } from "../styles";
// import { discord} from "../assets";
 import { SectionWrapper } from "../hoc";
// import { members } from "../constants";
// import { HolesCanvas } from "./canvas";

import { fadeIn, textVariant } from "../utils/motion";
// import { slideIn } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  source_code_link,

  image,n
}) => {
  return (
    <div className="mt-0 flex justify-evenly items-center flex-col">
     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}> 
      <Tilt
         options={{ rotate: 180 , speed: 1000 }}
     
        className="crusor-pointer border-b-2 border-cyan-300 group perspective  bg-tertiary  p-3 rounded-2xl sm:w-[250px] w-full shadow-[#00ECFE]/30 full shadow-card  gap-2 justify-center text-cennter"
      >   <div className=" mt-5 backface-hidden group-hover: my-rotate-y-360 border-cyan-300   shadow-card">
          </div>
        <div className="relative w-full h-[200px] ">
          <img
            src={image}
            alt={name}
            className=" absolute w-[200px] object-cover rounded-1xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          </div>
             
          
        </div>
        <div className="mt-2">
          <h2 className="text-transparent text-[18px] bg-clip-text bg-gradient-to-r from-cyan-400 to-white uppercase tracking-wider text-center">{name}</h2>
          <p className="mt-3 text-white-800 text-[12px] text-center">{description}</p>
        </div>
         
         
      </Tilt>
     </motion.div> 
    </div>
  );
};

const Ourteam = () => {
  return (
    <>
       <div className="sm-5 flex flex-wrap justify-center items-center text-center">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Team Leaders</h2>
        <p className={styles.sectionSubText}><span className=" text-transparent  text-[25px] bg-clip-text bg-gradient-to-r from-cyan-400 to-white" >
          OUR leadership team  !!
        </span>
        </p>
        
      </motion.div>
      </div>
    
      
      
      
      
      <div className="mt-20 flex flex-wrap gap-2 justify-center">
        {members.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      {/* <div className="mt-5 flex flex-wrap justify-center">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}><span className="text-transparent text-bold  text-[25px] bg-clip-text bg-gradient-to-r from-cyan-400 to-white" >
          OUR ADVISORY 
        </span>
        </p>
        
      </motion.div>
      </div> */}
       {/* <motion.div
        animate={{
          y: [0, 24, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <HolesCanvas />
      </motion.div> */}


      
    </>
    
  );
};


export default SectionWrapper(Ourteam, "Manzel/OurTeam");
