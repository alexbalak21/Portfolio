import type { HeroInfo, StatItem } from "@types";

const short_title = "Spring Boot & Flask Developer, React Enthusiast"
const title = "Full Stack Developer Java, Python, TypeScript";
const location = "Lyon, France";
const name = "Alex Balak";
const description = "Passionate developer fully dedicated to creating modern, scalable web applications using clean architecture, modern UI, and the latest technologies.";

export const HERO_INFO: HeroInfo = {
    short_title,
    location,
    name,
    title,
    description
}

export const GET_IN_TOUCH = 'Get in Touch';

export const STATS: StatItem[] = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Projects Completed', value: '30+' },
  { label: 'Certifications', value: '5+' }
];