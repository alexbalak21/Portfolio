import type { HeroInfo } from "@types";
import type { StatItem } from "@types";

const short_title = "Développeur Spring Boot, Flask et React"
const title = "Développeur Full Stack Java, Python, TypeScript";
const location = "Lyon, France";
const name = "Alex Balak";
const description = "Développeur passionné, pleinement dédié à la création d'applications web modernes et évolutives, reposant sur une architecture solide, une interface moderne et les technologies les plus récentes.";

export const HERO_INFO: HeroInfo = {
    short_title,
    location,
    name,
    title,
    description
}

export const GET_IN_TOUCH = 'Me Contacter';

export const STATS: StatItem[] = [
    { label: "Années d'expérience", value: '3+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Projets Réalisés', value: '30+' },
    { label: 'Clients', value: '5+' }
];