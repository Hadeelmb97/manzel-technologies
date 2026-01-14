import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";





 function Splinescene()

{
  return (
    // <div>
          
    //       <motion.div variants={textVariant()}>
    //       <h1 className={`${styles.sectionHeadText} text-white mt-10 text-slate-300	flex text-[100x] flex-wrap justify-center text-center ">`}> Why Manzel.</h1>
           
          
    // </motion.div>
    
    // <div>
          
    //       <motion.div variants={textVariant()}>
    //       <p className={`${styles.heroSubText} mt-3 text-cyan-900	text-[80px] flex-wrap justify-center text-center leading-[100px] ">`}>
    //          <Spline scene="https://prod.spline.design/j9SAgpR7E4rHv6t2/scene.splinecode" />

    //       </p>
          
    //       </motion.div>
    
    <div class="mt-1 bg-hero-footer bg-cover bg-no-repeat bg-center bg-shadow-[#67e8f9]/50 leading-[10px]">
      
      
     
     {/* <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Our Features</h2>
        <p className={styles.sectionSubText}>what we want to Acheive?</p>
        
       
      </motion.div>
      */}
      
       
       <Spline scene="https://prod.spline.design/q13p6Hf0FzrJYZbU/scene.splinecode" />
       

   
  
  
  </div>
    );

  
}
export default Splinescene;

