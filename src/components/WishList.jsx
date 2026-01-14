import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { wishlist } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const WishlistCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-[250px] justify-center items-center text-center">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card center shadow-[#00ECFE]/10 justify-center items-center text-center "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly text-center flex-col flex-row items-center"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain items-center text-center"
        />

        <h3 className="text-white text-[18px] font-bold text-center justify-center text-center items-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const WishList = () => {
  return (
    <>
      
      <div class="mt-10 flex flex-wrap justify-center items-center text-center">
      <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>WishList.</h2>
        <p className={styles.sectionSubText}>Want to be the one of the alpha tester for our game?</p>
        
      </motion.div>
      </div> 
     
      <div className="mt-20 flex flex-wrap gap-10 leading-[40px] justify-center items-center text-center">
        {wishlist.map((service, index) => (
          <WishlistCard key={service.title} index={index} {...service} />
          
        ))}
        
      </div>
      
          
    
    </>
    
  );
  
};

export default SectionWrapper(WishList, "Wishlist");
