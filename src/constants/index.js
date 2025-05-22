import { link } from "framer-motion/client";
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React , as well as back-end technologies like Node.js,and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;



export const PROJECTS = [
  {
    title: "Foodi App",
    image: project1,
    description:
      "A fully functional restaurant site which features include seamless frontend-backend integration , Firebase authentication, JWT token access, admin panel, payment processing, image hosting and online food ordering",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://vercel.com/adnaan-a-khaders-projects/foodi-client"
  },
  {
    title: "Gym Website",
    image: project2,
    description:
      "A responsive gym website with a modern design, featuring sections for classes, trainers, testimonials, and a contact form.",
    technologies: ["HTML", "CSS", "React", "JS"],
    link: "https://gymtask.vercel.app/#"
  },
  {
    title: "Pong game",
    image: project3,
    description:
      "A simple Pong game built with HTML, CSS, and JavaScript, featuring two-player mode ",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://vercel.com/adnaan-a-khaders-projects/pong-game"
  },
  {
    title: "Parallax Scrolling",
    image: project4,
    description:
      "A visually stunning parallax scrolling website built with HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://parallax-red-three.vercel.app/"
  },
];

export const CONTACT = {
  address:  "Based in India",
  phoneNo: "+91 7356636338 ",
  email: "adnaana523@gmail.com",
};
