export type SkillLevel = "Expert" | "Advanced" | "Intermediate";

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  tagline: string;
  resume: string;
  bio: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram?: string;
  twitter?: string;
  dribbble?: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface NavLink {
  id: string;
  label: string;
}

export interface HeroInfo {
  short_title: string;
  title: string;
  location: string;
  name: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  metrics?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  level: SkillLevel;
  experience: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}