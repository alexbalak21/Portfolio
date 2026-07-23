import type { Project } from "@types";

export const pill_title = "Mes Projets";
export const TITLE = "Travaux Sélectionnés";
export const description = "Découvrez une sélection de mes projets les plus impactants, mettant en valeur mon expertise en Java, Python, TypeScript et le développement web moderne. Chaque projet illustre mon engagement envers une architecture propre, l'évolutivité et un design centré utilisateur.";
export const categories: string[] = ['All', 'Web Apps', 'UI Components', 'Full Stack', 'Frontend'];

export const projects: Project[] = [
  {
    id: 1,
    title: "Portail de Support / Gestionnaire de Tickets",
    description: "Un portail de support full-stack moderne. Les utilisateurs soumettent des tickets via une interface claire et intuitive, les agents répondent via un système de conversation intégré, et les managers disposent de tableaux de bord complets avec statistiques.",
    image: "/images/projects/support-portal.jpg",
    category: "Full Stack",
    technologies: ["Spring Boot", "PostgreSQL", "React", "Tailwind"],
    metrics: "Application complète déployée sur Render",
    demoUrl: "https://suppurt-portal.onrender.com",
    githubUrl: "https://github.com/alexbalak21/Suppurt-Portal"
  },
  {
    id: 2,
    title: "Application Web de Notes",
    description: "Une application de notes web construite avec React, Vite, Material-UI et Flask. Organisez vos notes avec des catégories et des couleurs personnalisées dans une interface propre et intuitive.",
    image: "/images/projects/notes-app.jpg",
    category: "Web Apps",
    technologies: ["Python", "Flask", "React", "Material-UI"],
    metrics: "Application simple avec Material-UI",
    demoUrl: "https://notes-app.alwaysdata.net/",
    githubUrl: "https://github.com/alexbalak21/Notes-App"
  },
  {
    id: 3,
    title: "Plateforme E-Commerce",
    description: "Un site e-commerce moderne construit avec HTML, CSS et JavaScript.",
    image: "/images/projects/shop.jpg",
    category: "Frontend",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    metrics: "Template pour application e-commerce full-stack",
    demoUrl: "https://alexbalak21.github.io/E-commece-Shop/",
    githubUrl: "https://github.com/alexbalak21/E-commece-Shop"
  },
  {
    id: 5,
    title: "Application Liste de Tâches",
    description: "Une application ToDo simple, propre et efficace construite en JavaScript vanilla.",
    image: "/images/projects/todo.jpg",
    category: "Frontend",
    technologies: ["HTML5", "CSS3", "JavaScript", "SQLite"],
    metrics: "Application web pour gérer les tâches quotidiennes",
    demoUrl: "https://alexbalak21.github.io/Todo-List/",
    githubUrl: "https://github.com/alexbalak21/Todo-List"
  },
  {
    id: 6,
    title: "Site Web Novocib",
    description: "Un site web moderne et responsive pour Novocib, une entreprise proposant des solutions innovantes.",
    image: "/images/projects/novocib.jpg",
    category: "Full Stack",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    metrics: "Augmentation de la visibilité et des ventes de 70%",
    demoUrl: "https://www.novocib.com/",
    githubUrl: "https://github.com/alexbalak21"
  },
  {
    id: 7,
    title: "Générateur de Mots de Passe",
    description: "Un générateur de mots de passe simple construit en JavaScript vanilla, Bootstrap et HTML.",
    image: "/images/projects/password-generator.jpg",
    category: "Web Apps",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    metrics: "Utilitaire pour usage quotidien",
    demoUrl: "https://alex.alwaysdata.net/apps/passgen",
    githubUrl: "https://github.com/alexbalak21/Password-Generator"
  },
];
