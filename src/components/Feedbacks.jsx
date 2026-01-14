import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  
}) => (
  <div className="flex flex-wrap justify-center items-center">
   <motion.div
    variants={fadeIn("", "spring", index * 0.7, 0.75)}
    className="bg-black-200 p-5 rounded-3xl xs:w-[270px] w-full justify-center items-center"
   >
    <p className=" mt-7 flex flex-wrap text-cyan-200 font-black text-[25px] justify-center items-center">"</p>

    <div className="mt-1 justify-center items-center">
      <p className="text-white text-[20px] justify-center items-center">{testimonial}</p>

      <div className="mt-7 flex justify-center items-center gap-1 justify-center items-center">
        <div className=" flex flex-col ">
          <p className="text-white font-medium text-[14px] justify-center items-center">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-2 text-secondary text-[12px] justify-center items-center">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-14 h-14 rounded-full object-cover justify-center items-center"
        />
      </div>
    </div>
   </motion.div>
  </div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[100px] justify-center items-center">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl justify-center items-center `}
      >
      <div className="flex flex-wrap justify-center items-center">
        <motion.div variants={textVariant()}>
          
           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
           <p className={styles.sectionSubText}>What others say</p>
         
          
        </motion.div>
      </div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center items-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    
      
      <div class="mt-10 flex flex-wrap justify-center items-center ">
      <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Live the moment.</h2>
        <p className={styles.sectionSubText}>see the feedback!!</p>
        
       
      </motion.div>
      </div> 

      
    </div>

    
    
  );
};

export default Feedbacks;