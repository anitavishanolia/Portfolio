// import React from "react";
// // import Tilt from "react-tilt";
// import Tilt from "react-parallax-tilt";

// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div>
//         </div>

//         <div className='mt-5'>
//           <h3 className='text-white font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         {/* <p className={`${styles.sectionSubText}`}>My work</p> */}
//         <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
//       </motion.div>

//  {/* <div className="flex text-center justify-center">
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-4 text-secondary text-[15px] max-w-3xl leading-[30px]" */}


//       <div className='flex text-center justify-center'>
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-4 text-secondary max-w-3xl text-[15px]'
//         >
//           Following projects showcases my skills and experience through
//           real-world examples of my work. Each project is briefly described with
//           links to code repositories and live demos in it. It reflects my
//           ability to solve complex problems, work with different technologies,
//           and manage projects effectively.
//         </motion.p>
//       </div>
//       <div className='mt-20 flex flex-wrap gap-7'>
// {/* 
//       <div className="mt-20 flex justify-center items-center gap-10 flex-wrap"> */}
//       {/* <div className='mt-20 flex flex-wrap gap-7'> */}
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>

//       {/* <div className="mt-20 flex justify-center items-center gap-10 flex-wrap">
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div> */}
//     </>
//   );
// };

// export default SectionWrapper(Works, "");


import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.02}
        transitionSpeed={450}
        className='bg-tertiary p-4 rounded-2xl sm:w-[300px] w-full h-[460px] flex flex-col justify-between'
      >
        {/* Image */}
        <div className='relative w-full h-[180px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-2 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='mt-3'>
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[13px] leading-relaxed'>
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className='mt-3 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[13px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      <div className='flex text-center justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary max-w-3xl text-[15px]'
        >
          Following projects showcase my skills and experience through real-world
          examples. Each project is briefly described with links to code repositories
          and live demos. It reflects my ability to solve complex problems, work with
          different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-16 flex flex-wrap gap-6 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
