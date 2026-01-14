import Tilt from "react-tilt";
import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { discord} from "../assets";
import { SectionWrapper } from "../hoc";
import { dervices } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
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
        className="bg-tertiary p-5 rounded-[20px] sm:w-[400px] w-full border-x-1 border-b-2 border-cyan-300 shadow-[#00ECFE]/20 full p-[10px] rounded-[10px] shadow-card center   p-5 rounded-2xl sm:w-[300px] w-full"
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

const Service = () => {
  return (
    <>
      <div className="mt-5 flex flex-wrap justify-center">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Services.</h2>
         <p className={styles.sectionSubText}>What we can do?</p>
        
        {/* <p className={styles.sectionSubText}> Our daily Blogs and players "Student" works -comming soon-!!</p> */}
        
      </motion.div>
      </div>
      <div className="mt-0 flex flex-wrap gap-10 justify-center">
        {dervices.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
    
  );
};


export default SectionWrapper(Service, "Manzel/Service");
