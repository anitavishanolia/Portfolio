
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  //starbucks,
  nitj,
  tesla,
  shopify,
  //carrent,
  jobportal,
  jobit,
  // tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    
    
    title: "Front-End Developer",
    company_name: "NIT Jalandhar",
    icon: nitj, // Replace with the appropriate icon
    iconBg: "#383E56",
    date: "April 2023 - Nov 2024",
    points: [
      "Designed and implemented the front-end for 10+ pages in the Administration section of the institute’s website.",
      "Utilized HTML, Tailwind CSS, and JavaScript to create responsive, user-friendly web interfaces.",
      "Worked closely with the team to improve website functionality and enhance the overall design..",
      "Optimized performance and ensured cross-browser compatibility for a seamless user experience.",
    ],
  },
  {
    
    
    title: "Full-Stack Developer",
    company_name: "Cognifyz",
    icon: "https://cognifyz.com/wp-content/uploads/2023/11/cognifyz-1.png", // Replace with the appropriate icon
    iconBg: "#383E56",
    date: "Summer 2024",
    points: [
      "Worked on two major projects: a Password Manager and a Image Generator.",
      "Built both the frontend and backend for the Password Manager, integrating security measures like password validation and encryption to protect user data.",
      "Created a Full Stack Text-to-Image Generator app with credit system, user authentication, and ClipDrop API.",
      "Collaborated with the team to integrate various tools and libraries for enhanced functionality and performance.",
      "Optimized the performance of both applications, enhancing user experience through efficient coding and thorough testing."
    ],
  },
];

const projects = [
  {
    name: "Hire Spot",
    description:
      "Built HireSpot, a full-stack job portal that efficiently connects job seekers with recruiters, aiming to streamline the hiring process and bridge the gap between talent and opportunity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
     image: "https://media.geeksforgeeks.org/wp-content/uploads/20240225123246/Screenshot-2024-02-25-123226.jpg",
  
    source_code_link: "https://github.com/anitavishanolia/HireSpot",
  },
  {
    name: "TexturaAI",
    description:
      "Developed a Full Stack AI SaaS Text-to-Image generator application using the MERN stack, integrating the Clipdrop API to enable AI-powered image generation with a credit-based system and secure online payment gateway for purchasing credits.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mondodb",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZUJvLI_D0RmUcDWlmKWk86h3V2ZtBtJJFQ&s",
    source_code_link: "https://github.com/anitavishanolia/TexturaAI",
  },
  {
    name: "BookStore",
    description:
      
"Developed a bookstore app enabling users to search, explore, and purchase books, offering both free and paid content for a seamless reading experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAifJa5FNixvbrQ7EJodXLVVqmvN_D48ZWw&s",
    source_code_link: "https://github.com/anitavishanolia/BookStore",
  },
  {
    name: "Password Manager",
    description:
    "Developed a full-stack Password Manager, leveraging React and Express.js for secure password storage, retrieval, and editing, with Local Storage for persistence and MongoDB for backend management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: "https://img.freepik.com/free-vector/user-login-landing-page-with-memphis-design_23-2148267062.jpg",
    source_code_link: "https://github.com/anitavishanolia/Password-manager-using-react-Tailwind-CSS",
  },
];

export { services, technologies, experiences, projects };
