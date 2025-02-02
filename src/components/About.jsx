import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Centered Introduction */}
      <div className="flex text-center justify-center">
        <motion.p
          variants={textVariant()}
          className={`${styles.sectionHeadText} text-center`}
         
        >
    {/* Introduction */}
           <h6 className={`${styles.sectionHeadText}`}>
                    Introduction
                  </h6>
        </motion.p>
      </div>




      {/* Centered Description */}
      <div className="flex text-center justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[15px] max-w-3xl leading-[30px]"
        >
          "I'm a MERN stack developer with strong expertise in C++, DSA, and
           web development. I build scalable, high-performance applications
           using React, Node.js, MongoDB, and Tailwind CSS. With a deep
          understanding of both frontend and backend development, I craft
          efficient, maintainable solutions that drive innovation.
          Continuously learning and adapting to new technologies, I thrive on
          solving complex challenges and turning ideas into reality. Let’s
          connect and build something incredible!"
        </motion.p>
      </div>

      {/* Centered Service Cards */}
      <div className="mt-20 flex justify-center items-center gap-10 flex-wrap">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
