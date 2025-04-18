
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
    title: "React",
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

// const projects = [
//   {
//      name: "ChatDoc",
//     description:"Built ChatDoc, a full-stack AI chatbot platform using Next.js,Chat GPT and Gemini that lets users upload PDFs or images and interact with them through intelligent, real-time chat. Features include live collaboration, chat export, authentication, and support for both dark and light themes."
//       ,
//     tags: [
//       {
//         name: "Next.js",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Firebase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Chat Gpt",
//         color: "red-text-gradient",
//       },
//       {
//         name: "Gemini",
//         color: "yellow-text-gradient",
//       },
//     ],
//      image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1715085404/catalog/1661763302758420480/kzgqqljpmsiwxtsu9ajq.jpg",
  
//     source_code_link: "https://github.com/anitavishanolia/HireSpot",
//   },
//   {
//     name: "HireSpot",
//     description:
//       "Built HireSpot, a full-stack job portal that efficiently connects job seekers with recruiters, aiming to streamline the hiring process and bridge the gap between talent and opportunity.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240225123246/Screenshot-2024-02-25-123226.jpg",
  
//     source_code_link: "https://github.com/anitavishanolia/ChatDoc",
//   },
//   {
//     name: "Image-Generator",
//     description:
//       "Developed a Full Stack AI SaaS Text-to-Image generator application using the MERN stack, integrating the Clipdrop API to enable AI-powered image generation with a credit-based system and secure online payment gateway for purchasing credits.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mondodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Express.js",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZUJvLI_D0RmUcDWlmKWk86h3V2ZtBtJJFQ&s",
//     source_code_link: "https://github.com/anitavishanolia/ImageGenerator",
//   },
//   {
//     name: "BookStore",
//     description:
      
// "Developed a bookstore app enabling users to search, explore, and purchase books, offering both free and paid content for a seamless reading experience.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "green-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAifJa5FNixvbrQ7EJodXLVVqmvN_D48ZWw&s",
//     source_code_link: "https://github.com/anitavishanolia/BookStore",
//   },
//   {
//     name: "Password Manager",
//     description:
//     "Developed a full-stack Password Manager, leveraging React and Express.js for secure password storage, retrieval, and editing, with Local Storage for persistence and MongoDB for backend management.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "green-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: "https://img.freepik.com/free-vector/user-login-landing-page-with-memphis-design_23-2148267062.jpg",
//     source_code_link: "https://github.com/anitavishanolia/Password-manager-using-react-Tailwind-CSS",
//   },
//   {
//     "name": "FlightPath",
//     "description": 
//       "Built an intelligent flight routing system capable of identifying the shortest and most efficient path between any two airports, even in the absence of direct connections. Leveraged graph-based algorithms to optimize routes by reducing layovers and minimizing overall travel time.",
//     "tags": [
//       { "name": "graph-algorithms", "color": "blue-text-gradient" },
//       { "name": "route-optimization", "color": "green-text-gradient" },
//       { "name": "aviation", "color": "yellow-text-gradient" },
//     ],
//     "image": "https://www.katepullinger.com/images/sized/website_archive/images/uploads/flightpaths_logo_300dpi_1-230x173.jpg",
//     "source_code_link": "https://flight-mate.vercel.app/"
// }
// ];

// export { services, technologies, experiences, projects };


const projects = [
  {
    name: "ChatPdf",
    description:
      "Full-stack AI-powered ChatPDF app built with Next.js, ChatGPT, and Gemini, enabling users to upload and chat with PDFs in real time, featuring authentication, live collaboration, chat export, and theme toggle support.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "Chat Gpt", color: "red-text-gradient" },
      { name: "Gemini", color: "yellow-text-gradient" },
    ],
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1715085404/catalog/1661763302758420480/kzgqqljpmsiwxtsu9ajq.jpg",
    source_code_link: "https://github.com/anitavishanolia/chatpdf",
  },
  {
    name: "HireSpot",
    description:
      "Job portal that connects job seekers and recruiters. Built with full-stack tech to simplify hiring and improve candidate discovery.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240225123246/Screenshot-2024-02-25-123226.jpg",
      source_code_link: "https://github.com/anitavishanolia/HireSpot",
  },
  {
    name: "Image-Generator",
    description:
      "AI SaaS image generator using the MERN stack and Clipdrop API. Includes credit-based system and secure online payment integration.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mondodb", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZUJvLI_D0RmUcDWlmKWk86h3V2ZtBtJJFQ&s",
    source_code_link: "https://github.com/anitavishanolia/ImageGenerator",
  },
  {
    name: "BookStore",
    description:
      "Online bookstore app that lets users explore, read, and purchase books. Supports both free and premium reading options.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAifJa5FNixvbrQ7EJodXLVVqmvN_D48ZWw&s",
    source_code_link: "https://github.com/anitavishanolia/BookStore",
  },
  {
    name: "Password Manager",
    description:
      "Full-stack password manager built with React and Express. Supports secure storage, editing, and MongoDB integration.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image:
      "https://img.freepik.com/free-vector/user-login-landing-page-with-memphis-design_23-2148267062.jpg",
    source_code_link:
      "https://github.com/anitavishanolia/Password-manager-using-react-Tailwind-CSS",
  },
  {
    name: "FlightPath",
    description:
      "Flight route planner that uses graph algorithms to find shortest and most efficient paths between airports globally.",
    tags: [
      { name: "graph-algorithms", color: "blue-text-gradient" },
      { name: "route-optimization", color: "green-text-gradient" },
      { name: "aviation", color: "yellow-text-gradient" },
    ],
    image:
      "https://www.katepullinger.com/images/sized/website_archive/images/uploads/flightpaths_logo_300dpi_1-230x173.jpg",
    source_code_link: "https://flight-mate.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
