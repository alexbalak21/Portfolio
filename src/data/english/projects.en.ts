import type { Project } from "@types";

const pill_title = "My Projects";
const TITLE = "Featured Work";
const description = "Explore a selection of my most impactful projects, showcasing my expertise in Java, Python, TypeScript, and modern web development. Each project highlights my commitment to clean architecture, scalability, and user-centric design.";
const desc_exemple = "A curated selection of projects showcasing my experience across development, design, automation, and digital strategy."


export const projects: Project[] = [
  {
    id: 1,
    title: "Issue Tracker / Support Portal App",
    description: "A full-stack modern Support Portal. Users can submit issues through a clean and intuitive interface, support agents can respond via an integrated ticket‑based conversation system, and managers maintain full oversight with dedicated dashboards, graphs, and performance statistics.",
    image: "/images/projects/support-portal.jpg",
    category: "Full Stack",
    technologies: ["Spring Boot", "PostgreSQL", "React", "TypeScript", "Tailwind"],
    metrics: "Full Production-Ready Application",
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
    id: 4,
    title: "Portfolio Website",
    description: "Personal portfolio website with interactive animations and responsive design.",
    image: "/images/projects/Project4.jpg",
    category: "Web Apps",
    technologies: ["React", "TypeScript", "Framer Motion"],
    metrics: "300+ daily visitors",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com"
  },
  {
    id: 5,
    title: "UI Component Library",
    description: "Reusable UI components for rapid prototyping and consistent design.",
    image: "/images/projects/Project5.jpg",
    category: "UI Components",
    technologies: ["React", "Storybook", "Tailwind"],
    metrics: "Used in 10+ projects",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com"
  },
  {
    id: 6,
    title: "Marketing Automation Tool",
    description: "Automates email campaigns, lead scoring, and analytics for marketing teams.",
    image: "/images/projects/Project6.jpg",
    category: "Full Stack",
    technologies: ["React", "Node.js", "SendGrid"],
    metrics: "5x faster campaign setup",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com"
  },
  {
    id: 7,
    title: "Real-Time Chat App",
    description: "Instant messaging app with group chats, file sharing, and notifications.",
    image: "/images/projects/Project7.jpg",
    category: "Web Apps",
    technologies: ["React", "Socket.io", "Node.js"],
    metrics: "99.9% uptime",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com"
  },
  {
    id: 8,
    title: "Design System",
    description: "Comprehensive design system for scalable and consistent UI/UX.",
    image: "/images/projects/Project8.jpg",
    category: "UI Components",
    technologies: ["React", "Figma", "TypeScript"],
    metrics: "Adopted by 3 teams",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com"
  },
  {
    id: 9,
    title: "Business Analytics Dashboard",
    description: "Visualizes key business metrics with interactive charts and reports.",
    image: "/images/projects/Project9.jpg",
    category: "Full Stack",
    technologies: ["React", "D3.js", "Node.js"],
    metrics: "20+ KPIs tracked",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com"
  },
  {
    id: 10,
    title: "Landing Page Generator",
    description: "Tool for quickly generating high-converting landing pages.",
    image: "/images/projects/Project10.jpg",
    category: "Web Apps",
    technologies: ["React", "Next.js", "Tailwind"],
    metrics: "100+ pages created",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com"
  },
  {
    id: 11,
    title: "Automated Testing Suite",
    description: "End-to-end testing suite for web applications.",
    image: "/images/projects/Project11.jpg",
    category: "Full Stack",
    technologies: ["Jest", "Cypress", "React"],
    metrics: "95% test coverage",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com"
  },
  {
    id: 12,
    title: "Social Media Scheduler",
    description: "Schedules and automates social media posts across platforms.",
    image: "/images/projects/Project12.jpg",
    category: "Web Apps",
    technologies: ["React", "Node.js", "MongoDB"],
    metrics: "10k+ posts scheduled",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com"
  },
  {
    id: 13,
    title: "Custom CRM System",
    description: "Customer relationship management system tailored for small businesses.",
    image: "/images/projects/Project13.jpg",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MySQL"],
    metrics: "200+ clients managed",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com"
  },
  {
    id: 14,
    title: "Interactive Data Visualizer",
    description: "Tool for creating interactive data visualizations and dashboards.",
    image: "/images/projects/Project14.jpg",
    category: "UI Components",
    technologies: ["React", "D3.js", "TypeScript"],
    metrics: "50+ visualizations built",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com"
  },
  {
    id: 15,
    title: "Online Booking System",
    description: "Booking and reservation system for service providers.",
    image: "/images/projects/Project15.jpg",
    category: "Web Apps",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    metrics: "5,000+ bookings processed",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com"
  }
];


export const categories: string[] = ['All', 'Web Apps', 'UI Components', 'Full Stack'];
