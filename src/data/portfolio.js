import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiGit,
  SiPython,
  SiCplusplus,
  SiMui,
  SiBootstrap,
  SiAntdesign,
  SiMysql,
  SiDocker,
  SiLinux,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export const personalInfo = {
  name: "Nitin Sharma",
  title: " Full Stack Engineer",
  subtitle: "Building pixel-perfect, performant web experiences",
  bio: "Passionate Full Stack Engineer with 2+ years of experience crafting modern web applications. I specialize in React.js, Next.js, and building scalable user interfaces that deliver exceptional user experiences. I love turning complex problems into simple, beautiful, and intuitive designs.",
  email: "nitinsharma98393139@gmail.com",
  phone: "+919305985466",
  github: "https://github.com/Nitinsharma078",
  linkedin: "https://www.linkedin.com/in/nitin078/",
  location: "Jaipur, Rajasthan, India",
  resumeUrl: "/resume/resume.pdf",
};

export const navLinks = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Experience", href: "experience" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export const skills = [
  { name: "React.js", icon: SiReact, level: 95, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, level: 90, color: "#ffffff" },
  { name: "JavaScript", icon: SiJavascript, level: 95, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "#06B6D4" },
  { name: "Redux", icon: SiRedux, level: 85, color: "#764ABC" },
  { name: "Node.js", icon: SiNodedotjs, level: 80, color: "#339933" },
  { name: "Express.js", icon: SiExpress, level: 78, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, level: 75, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, level: 70, color: "#4479A1" },
  { name: "Material UI", icon: SiMui, level: 85, color: "#007FFF" },
  { name: "Bootstrap", icon: SiBootstrap, level: 88, color: "#7952B3" },
  { name: "Ant Design", icon: SiAntdesign, level: 85, color: "#0170FE" },
  { name: "Git", icon: SiGit, level: 85, color: "#F05032" },
  { name: "Python", icon: SiPython, level: 72, color: "#3776AB" },
  { name: "C++", icon: SiCplusplus, level: 75, color: "#00599C" },
  { name: "Linux", icon: SiLinux, level: 70, color: "#FCC624" },
];

export const experiences = [
  {
    id: 1,
    role: "Full Stack Engineer",
    company: "Codifly It Solution",
    location: "Jaipur, Rajasthan",
    period: "Aug 2025 - Present",
    type: "Full-time",
    description: [
      "Developed and maintained end-to-end web applications using React.js, Next.js, and Redux for state management",
      "Built reusable UI components and optimized performance to improve page load speed and user experience",
      "Improved application performance through code optimization, lazy loading, and effective state handling",
      "Collaborated closely with backend teams and designers to implement responsive and scalable product features",
    ],
    tech: ["React.js", "Next.js","Node.js","MongoDB", "Redux", "Tailwind CSS", "REST APIs"],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "AssessPrep",
    location: "Gurgaon, Haryana",
    period: "Jan 2024 - Jun 2025",
    type: "Full-time",
    description: [
      "Developed AI-assisted learning features including mask schemes and teacher explanations using React.js",
      "Built an AI grading system to automatically evaluate student submissions with Node.js backend integration",
      "Added custom image cropping functionality and Speech-to-Text/Text-to-Speech features for accessibility",
      "Demonstrated expertise in developing both mobile and web applications with focus on user experience",
    ],
    tech: ["React.js", "Ant Design", "AWS"],
  },
  {
    id: 3,
    role: "Machine Learning Intern",
    company: "Data Pro (Itonics Labs)",
    location: "Delhi (Remote)",
    period: "Jul 2023 - Nov 2023",
    type: "Internship",
    description: [
      "Implemented machine learning algorithms and worked with Large Language Models (LLMs) like GPT",
      "Built high-performance systems for decision-making optimization",
      "Gained hands-on experience with LangChain for building AI-integrated systems",
      "Explored Generative AI with focus on language generation and conversational agents",
    ],
    tech: ["Python", "LangChain", "GPT", "Machine Learning", "Gen AI"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Pluc TV",
    subtitle: "Streaming Web Platform",
    description:
      "Developed the platform end-to-end, handling both admin and user modules, including authentication, content management, and UI implementation. Built scalable, responsive interfaces and integrated secure APIs for a seamless experience.",
    image: "/projects/pluctv.svg",
    tech: ["React.js", "Next.js", "Bootstrap", "Node.js", "REST API"],
    github: "https://github.com/nitins",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Nxux Recruitment",
    subtitle: "Recruitment Web Platform",
    description:
      "Developed and maintained the end-to-end recruitment platform including candidate management, job posting, and admin dashboards. Implemented responsive and scalable UI with secure API integrations.",
    image: "/projects/nxux.svg",
    tech: [  "Next.js", "Bootstrap", "Node.js", "MongoDB"],
    github: "https://github.com/nitins",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "AssessPrep",
    subtitle: "Online Assessment Platform",
    description:
      "Developed core frontend features such as test creation, question editing, and real-time proctoring dashboard. Implemented reusable UI components using Ant Design with cross-browser compatibility.",
    image: "/projects/assessprep.svg",
    tech: ["React.js", "Ant Design", "Ruby on Rails", "AWS", "Redux"],
    github: "https://github.com/nitins",
    live: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Task Manager",
    subtitle: "Project Management App",
    description:
      "Built a Jira/Linear-like task management application with dynamic UI components for task creation, filtering by status/priority, and pagination. Integrated Redux for state management.",
    image: "/projects/taskmanager.svg",
    tech: ["React.js", "Ant Design", "Redux", "Ruby on Rails", "PostgreSQL"],
    github: "https://github.com/nitins",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Face Rekognition",
    subtitle: "AWS-Powered Face Detection",
    description:
      "Built an automated face recognition system using AWS services. Triggered Lambda functions via S3 notifications and stored training data in Rekognition index mapped to individuals via DynamoDB.",
    image: "/projects/facerek.svg",
    tech: ["AWS Lambda", "Rekognition", "DynamoDB", "S3", "Terraform"],
    github: "https://github.com/nitins",
    live: "#",
    featured: false,
  },
];

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "20+" },
  { label: "Happy Clients", value: "5+" },
];
