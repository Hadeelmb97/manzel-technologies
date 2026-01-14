import Tilt from "react-tilt";
import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { discord} from "../assets";
import { SectionWrapper } from "../hoc";
import { project } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  // tags,
  // image,
  source_code_link,
}) => {
  return (
    <div class="mt-0 flex flex-wrap justify-center">
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-#070713 p-5 rounded-[15px] sm:w-[700px] w-full border-x-1 border-b-2 border-cyan-300 shadow-[#00ECFE]/20 full p-[10px]  shadow-card center p-5  sm:w-[500px] w-full>  "  >
          <div className="relative w-full h-[380px] rounded-[15px] justify-center ">
           <div className="relative w-full h-[380px] rounded-[15px] ">
          
            <iframe width="100%" height="100%" src="https://www.youtube.com/shorts/17DpCkJAvWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="">

           </iframe>
           </div>
         </div>
          
          
        {/* <div className="relative w-full h-[500px]  rounded-[20px] ">
          {/* <img
            src="https://www.youtube.com/embed/ZH-GAc9tw1w"frameborder="0"
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          /> */}
          {/* <div class="mt-0 flex flex-wrap justify-center  "> */}
          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div> */}
          {/* </div> */}
        {/* </div> */} 
        {/* <div className="mt-5">
          <h3 className="text-cyan- font-bold text-[16px] flex-wrap justify-center text-center ">{name}</h3>
          <p className="mt-2 text-cyan-900 text-[ 18px-center max-w-4xl leading-[30px]">{description}</p>
        </div> */}
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

const knowmore = () => {
  return (
    <>
      <div class="mt-5 flex flex-wrap justify-center">
      <motion.div variants={textVariant()}>
        
        {/* <p className={styles.sectionSubText}> Our daily Blogs and players "Student" works -comming soon-!!</p> */}
        
      </motion.div>
      </div>
      <div className="mt-0 flex flex-wrap gap-10 justify-center">
        {project.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
    
  );
};


export default SectionWrapper(knowmore, "");
