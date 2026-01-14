import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { project } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  source_code_link,
}) => {
  return (
    <div className="mt-0 flex flex-wrap justify-center">
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-[#070713] p-5 rounded-[15px] sm:w-[950px] w-full border-x-1 border-b-2 border-cyan-300 shadow-[#00ECFE]/20"
        >
          <div className="relative w-full h-[600px] rounded-[15px] overflow-hidden">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/hzDR4whc7lA?autoplay=1&mute=1&loop=1&playlist=hzDR4whc7lA" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            />
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

const Award = () => {
  return (
    <>
      <div className="mt-5 flex flex-wrap justify-center">
        <motion.div variants={textVariant()} />
      </div>
      <div className="mt-0 flex flex-wrap gap-10 justify-center">
        {project.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Award, "");
