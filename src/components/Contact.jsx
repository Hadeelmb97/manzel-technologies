import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_bz1e9tq",
        "template_betqicq",
        {
          form_name: form.name,
          to_name: "manzel",
          from_email: form.email,
          from_name: form.name,
          to_email: "manzeledtech@gmail.com",
          message: form.message,
        },
        "aIzJAFTlq9wDFWKgH"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden items-center justify-center"`}
    >
 
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1] bg-black-100 p-2 rounded-2xl texr-orange-200 justify-center items-center"
      >
        
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        {/* <h className={styles.sectionSubText}> try rotate the earth</h> */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium items-center "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium justify-center items-center"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium justify-center items-center "
            />
          </label>

          <button
            type="submit"
            className="bg-sky py-3 px-8  border-r-2 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-sky-800 justify-center items-center"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        
      >
          <div className="relative w-full h-[380px] rounded-[15px] justify-center ">
           <div className="bg-#070713 p-5 rounded-[20px] sm:w-[300px] w-full border-x-1 border-b-2 border-cyan-300 shadow-[#00ECFE]/20 full p-[10px]  shadow-card center p-5  sm:w-[500px] w-full>  ">
          
            <video className="elementor-video" src="https://icity3d.com/wp-content/uploads/2024/05/buildings-.mov" autoPlay="" loop="" muted="muted" controlsList="nodownload"></video>
           </div>
         </div>
        
        {/* <EarthCanvas /> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "Manzel/Contact");
