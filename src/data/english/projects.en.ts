import type { Project } from "@types";

export const pill_title = "My Projects";
export const TITLE = "Featured Work";
export const description = "Explore a selection of my most impactful projects, showcasing my expertise in Java, Python, TypeScript, and modern web development. Each project highlights my commitment to clean architecture, scalability, and user-centric design.";


export const projects: Project[] = [
   {
    id: 1,
    title: "Issue Tracker / Support Portal App",
    description: "A full-stack modern Support Portal. Users can submit issues through a clean and intuitive interface, support agents can respond via an integrated ticket‑based conversation system, and managers maintain full oversight with dedicated dashboards, graphs, and performance statistics.",
    image: "/images/projects/support-portal.jpg",
    category: "Full Stack",
    technologies: ["Spring Boot", "PostgreSQL", "React", "Tailwind"],
    metrics: "Full Deployed Application on Render",
    demoUrl: "https://suppurt-portal.onrender.com",
    githubUrl: "https://github.com/alexbalak21/Suppurt-Portal"
  },
  {
    id: 2,
    title: "Notes Web App",
    description: "A notes web application built with React, Vite, Material-UI, and Flask. Organize your notes with custom categories and colors in a clean, intuitive interface.",
    image: "/images/projects/notes-app.jpg",
    category: "Web Apps",
    technologies: ["Python", "Flask", "React", "Material-UI"],
    metrics: "A simple app using Material-UI",
    demoUrl: "https://notes-app.alwaysdata.net/",
    githubUrl: "https://github.com/alexbalak21/Notes-App"
  },
   {
    id: 3,
    title: "E-Commerce Platform",
    description: "A modern e-commerce website built with HTML, CSS, and JavaScript.",
    image: "/images/projects/shop.jpg",
    category: "Frontend",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    metrics: "Template for fullstack e-commerce application",
    demoUrl: "https://alexbalak21.github.io/E-commece-Shop/",
    githubUrl: "https://github.com/alexbalak21/E-commece-Shop"
  },
  {
    id: 5,
    title: "To-Do List App",
    description: "A simple, clean, and efficient ToDo List application built with vanilla JavaScript.",
    image: "/images/projects/todo.jpg",
    category: "Frontend",
    technologies: ["HTML5", "CSS3", "JavaScript", "SQLite"],
    metrics: "Web application used to manage daily tasks",
    demoUrl: "https://alexbalak21.github.io/Todo-List/",
    githubUrl: "https://github.com/alexbalak21/Todo-List"
  },
  {
    id: 6,
    title: "Novocib Company Website",
    description: "A modern, responsive website for Novocib, a company providing innovative solutions.",
    image: "/images/projects/novocib.jpg",
    category: "Full Stack",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    metrics: "Increased visibility and sales for by 70%",
    demoUrl: "https://www.novocib.com/",
    githubUrl: "https://github.com/alexbalak21"
  },
  {
    id: 7,
    title: "Password Generator",
    description: "A simple password generator built with vanilla JavaScript, Bootstrap and HTML.",
    image: "/images/projects/password-generator.jpg",
    category: "Web Apps",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    metrics: "Utility application for everyday use",
    demoUrl: "https://alex.alwaysdata.net/apps/passgen",
    githubUrl: "https://github.com/alexbalak21/Password-Generator"
  },
  {
    id: 8,
    title: "Tailwind CSS Component Library",
    description: "A modern React application built with Tailwind CSS v4, featuring a dynamic theme system with 22 color options and dark/light mode support, plus a complete UI component library.",
    image: "/images/projects/tailwind-components.jpg",
    category: "UI Components",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    metrics: "Tailwind CSS component library",
    demoUrl: "https://alexbalak21.github.io/Tailwind-Component-Library/",
    githubUrl: "https://github.com/alexbalak21/Tailwind-Component-Library"
  },
];


export const categories: string[] = ['All', 'Web Apps', 'UI Components', 'Full Stack', 'Frontend'];
