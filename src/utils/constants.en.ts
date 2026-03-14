import type { PersonalInfo, SocialLinks, StatItem, NavLink } from "@types";

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Alex Johnson',
  title: 'React Developer & UI/UX Enthusiast',
  email: 'alex@timetoprogram.com',
  location: 'San Francisco, CA',
  tagline: 'Crafting seamless digital experiences with modern web technology',
  resume: '/CV - Alexandre Balakirev.pdf',
  bio: [
    `I'm a passionate React developer with over 3 years of experience building scalable, performant web applications. I specialize in creating intuitive user interfaces that combine beautiful design with exceptional functionality.`,
    `My expertise spans the entire frontend ecosystem, from React and Next.js to TypeScript and modern CSS frameworks. I'm committed to writing clean, maintainable code and staying current with the latest web technologies.`,
    `When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring new design trends.`
  ]
};

export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com/',
  twitter: 'https://twitter.com',
  dribbble: 'https://dribbble.com'
};

export const STATS: StatItem[] = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Client Satisfaction', value: '98%' }
];

export const ABOUT_STATS: StatItem[] = [
  { label: 'Happy Clients', value: '45+' },
  { label: 'Code Commits', value: '2.5K+' },
  { label: 'GitHub Stars', value: '500+' }
];

export const NAV_LINKS: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' }
];

export const HIRE_ME_LINK = 'Hire Me';
