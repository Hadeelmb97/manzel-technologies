import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
// import Spline from '@splinetool/react-spline';
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-[250px] justify-center items-center text-center">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card center shadow-[#00ECFE]/10 justify-center items-center text-center"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-7 px-12 min-h-[200px] flex justify-evenly text-center flex-col flex-row items-center gab-20"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain items-center text-center"
        />

        <h3 className="text-white text-[18px] font-bold text-center justify-center text-center items-center gab-20">
          {title}
        </h3>
        
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      
      <div class="mt-3 flex flex-wrap justify-center items-center">
      <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>About.</h2>
        <p className={styles.sectionSubText}>Who We Are?</p>
        
      </motion.div>
      
      </div> 
     
      <div class="mt-0 text-slate-300	flex text-[18px] flex-wrap justify-center text-center items-center ">
       <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-0 text-secondary text-[ 18px-center max-w-4xl leading-[30px]"
       >
        Manzel is the first VR educational game for Architects that utilizes AI & Virtual reality to teach students using challenges to maximize the quality of the learning process in a short time through metaverse. It is located in Jordan.

       </motion.p>
      
      </div>
      <div className="mt-20 flex flex-wrap npnp gap-10 leading-[30px] justify-center items-center text-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
          
        ))}
        
        
      </div>
      <div class="mt-10 flex flex-wrap justify-center items-center ">
      <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Our Vision & Goals.</h2>
        <p className={styles.sectionSubText}>what we want to Acheive?</p>
        
       
      </motion.div>
      </div> 
      <div class="mt-10 text-slate-300	flex text-[18px] flex-wrap justify-center text-center leading-[50px] ">
       <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-0 text-secondary text-[ 18px-center max-w-4xl leading-[30px]"
       >
        We aim to fill the gaps between theoretical learning and market needs by transforming theoretical knowledge into a poignant, interactive, easy-to-learn experiment to build a solid foundation that helps students and engineers gain more experience before engaging with a real job in short time through metaverse.

       </motion.p>
      
      </div>
          
    
    </>
    
  );
  
};

export default SectionWrapper(About, "Manzel/About");
