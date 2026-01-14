import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { dervices } from "../constants";
import { button } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, source_code_link }) => (
  <Tilt className="w-full sm:w-[300px]">
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="group w-full"
    >
      <div className="relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#00f0ff]/40 via-transparent to-[#8b5cf6]/40">
        <div className="relative bg-gradient-to-br from-[#0d0d1f] to-[#0a0a1a] rounded-2xl p-8 min-h-[300px] flex flex-col items-center justify-center gap-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative p-5 rounded-2xl bg-gradient-to-br from-[#00f0ff]/10 to-[#8b5cf6]/5 border border-white/10 group-hover:border-[#00f0ff]/30 transition-all duration-300">
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain"
            />
          </div>

          <h3 className="text-white text-xl font-bold text-center">
            {title}
          </h3>

          {source_code_link && (
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#8b5cf6]/20 border border-[#00f0ff]/30 hover:border-[#00f0ff] transition-all duration-300 group/btn"
            >
              <img src={button} alt="Learn more" className="w-4 h-4 object-contain" />
              <span className="text-[#00f0ff] text-sm font-medium group-hover/btn:text-white transition-colors">
                Learn More
              </span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Services = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#8b5cf6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#00f0ff]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center mb-16">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} mb-4`}>What We Can Do</p>
          <h2 className={`${styles.sectionHeadText} mb-4`}>
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#8b5cf6] to-[#ff6b35]">
              Services
            </span>
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Tech solutions that take your business to the next level with immersive experiences
        </motion.p>
      </div>

      <div className="relative flex flex-wrap justify-center gap-8">
        {dervices.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Services, "services");
