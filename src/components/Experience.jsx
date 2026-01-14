import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#050816",
        color: "#fff",
      }}
      contentPointStyle={{ borderRight: "20px solid  #112028" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full justify-center text-center items-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      }
    >
       <div>
        <h3 className="text-white text-[20px] font-bold">{experience.title}</h3>
        <p
          className="text-tertiary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div> 

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div className="mt-0 flex flex-wrap justify-center items-center text-center ">
      <motion.div variants={textVariant()}>
        
        <h2 className={styles.sectionHeadText}>Roadmap.</h2>
        <p className={styles.sectionSubText}>"Our Milestone!!"</p>
      </motion.div>
      </div>

      <div className="mt-16 flex flex-col items-center">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "Manzel/Roadmap");
