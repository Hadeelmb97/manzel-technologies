import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full sm:w-[280px]" options={{ max: 25, scale: 1.05, speed: 400 }}>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="group w-full cursor-pointer"
    >
      <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-[#00f0ff]/50 via-[#8b5cf6]/30 to-[#ff6b35]/50 overflow-hidden">
        <div className="relative bg-[#0d0d1f] rounded-2xl p-8 min-h-[260px] flex flex-col items-center justify-center gap-6 group-hover:bg-[#0d0d1f]/80 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute top-4 right-4 w-16 h-16 border border-[#00f0ff]/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />
          <div className="absolute top-8 right-8 w-8 h-8 border border-[#8b5cf6]/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
          
          <div className="absolute bottom-6 left-4 w-3 h-3 bg-[#00f0ff]/40 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity" style={{ animationDelay: '0.1s' }} />
          <div className="absolute bottom-10 left-8 w-2 h-2 bg-[#8b5cf6]/40 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity" style={{ animationDelay: '0.3s' }} />
          <div className="absolute top-12 left-6 w-2 h-2 bg-[#ff6b35]/40 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity" style={{ animationDelay: '0.5s' }} />
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-150" />
            <div className="relative p-4 rounded-xl bg-gradient-to-br from-[#00f0ff]/10 to-[#8b5cf6]/10 border border-white/5 group-hover:border-[#00f0ff]/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <img
                src={icon}
                alt={title}
                className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          <h3 className="relative text-white text-lg font-bold text-center group-hover:text-[#00f0ff] transition-colors duration-300">
            {title}
          </h3>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative">
      <div className="text-center mb-16">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} mb-4`}>Who We Are</p>
          <h2 className={`${styles.sectionHeadText} mb-8`}>
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6]">
              Manzel
            </span>
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Manzel is the first virtual platform for building simulations with real-world challenges 
          that utilizes AI & VR to increase accuracy for the highest interactive experience quality 
          with short time estimation.
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="text-center mb-12">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} mb-4`}>What We Want To Achieve</p>
          <h2 className={`${styles.sectionHeadText} mb-8`}>
            Our Vision &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#f59e0b]">
              Goals
            </span>
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          At Manzel, we transform theoretical knowledge into immersive, real-world simulations. 
          Powered by Akin, our platform bridges the gap between expertise and practice, equipping 
          engineers with hands-on experience to excel in the workforce.
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
