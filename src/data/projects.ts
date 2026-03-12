import type { Project } from "@types";

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
    metrics: "Used in 10+ projects",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://alexbalak21.github.io/Todo-List/"
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
];


export const categories: string[] = ['All', 'Web Apps', 'UI Components', 'Full Stack'];
