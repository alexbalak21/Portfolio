import type { SkillLevel } from "@utils/types";
import type { IconType } from "react-icons";
// Named imports for only used icons
import { FaJava, FaPython, FaJsSquare, FaPhp, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap, FaDocker, FaReact, FaBars, FaWindowRestore, FaWrench } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { SiTypescript, SiSpring, SiFlask, SiDjango, SiLaravel, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const iconMap: Record<string, IconType> = {
    FaJava,
    FaPython,
    FaJsSquare,
    FaPhp,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaDocker,
    FaReact,
    FaBars,
    FaWindowRestore,
    FaWrench,
    FaCode,
    SiTypescript,
    SiSpring,
    SiFlask,
    SiDjango,
    SiLaravel,
    SiNextdotjs,
    SiTailwindcss,
};

type SkillIconName = keyof typeof iconMap;

export interface EnglishSkill {
    name: string;
    level: SkillLevel;
    icon: SkillIconName;
}
export const categories = [
    { title: "Languages", icon: "FaBars" },
    { title: "Frameworks", icon: "FaWindowRestore" },
    { title: "Technologies", icon: "FaWrench" },
] as const satisfies ReadonlyArray<{ title: string; icon: SkillIconName }>;

export type SkillCategory = (typeof categories)[number];
export type SkillCategoryTitle = SkillCategory["title"];

export const SHORT_TITLE = "My Expertise";
export const LONG_TITLE = "Skills & Technologies";
export const DESCRIPTION = "A showcase of my proficiency in various programming languages, frameworks, and technologies that I have mastered over the years.";

export const languages: EnglishSkill[] = [
    {
        name: 'Java',
        level: 'Advanced',
        icon: 'FaJava',
    },
    {
        name: 'Python',
        level: 'Advanced',
        icon: 'FaPython',
    },
    {
        name: 'JavaScript',
        level: 'Advanced',
        icon: 'FaJsSquare',
    },
    {
        name: 'TypeScript',
        level: 'Intermediate',
        icon: 'SiTypescript',
    },
    {
        name: 'PHP',
        level: 'Intermediate',
        icon: 'FaPhp',
    }
]

export const frameworks: EnglishSkill[] = [
    {
        name: 'Spring Boot',
        level: 'Advanced',
        icon: 'SiSpring',
    },
    {
        name: 'React.js',
        level: 'Advanced',
        icon: 'FaReact',
    },
    {
        name: 'Flask',
        level: 'Advanced',
        icon: 'SiFlask',
    },
    {
        name: 'Django',
        level: 'Intermediate',
        icon: 'SiDjango',
    },

    {
        name: 'Laravel',
        level: 'Intermediate',
        icon: 'SiLaravel',
    },
    {
        name: 'Next.js',
        level: 'Intermediate',
        icon: 'SiNextdotjs',
    }
]

export const tools: EnglishSkill[] = [
    {
        name: 'Git & GitHub',
        level: 'Expert',
        icon: 'FaGithub',
    },
    {
        name: 'HTML',
        level: 'Expert',
        icon: 'FaHtml5',
    },
    {
        name: 'CSS',
        level: 'Expert',
        icon: 'FaCss3Alt',
    },
    {
        name: 'Tailwind CSS',
        level: 'Advanced',
        icon: 'SiTailwindcss',
    },
    {
        name: 'Bootstrap',
        level: 'Intermediate',
        icon: 'FaBootstrap',
    },
    {
        name: "Docker",
        level: "Intermediate",
        icon: "FaDocker",
    },
    
]

export const skills: EnglishSkill[] = [...languages, ...frameworks, ...tools];

export const skillsByCategory: Record<SkillCategoryTitle, EnglishSkill[]> = {
    Languages: languages,
    Frameworks: frameworks,
    "Technologies": tools,
};

export const resolveSkillIcon = (iconName: SkillIconName): IconType | undefined => {
    return iconMap[iconName];
};