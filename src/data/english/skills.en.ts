import type { SkillLevel } from "../../utils/types";
import type { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as SiIcons from "react-icons/si";

type SkillIconName = keyof typeof FaIcons | keyof typeof Fa6Icons | keyof typeof SiIcons;

export interface EnglishSkill {
    name: string;
    level: SkillLevel;
    icon: SkillIconName;
}

export const categories = [
    { title: "Languages", icon: "FaBarsProgress" },
    { title: "Frameworks", icon: "FaWindowRestore" },
    { title: "Technologies", icon: "FaWrench" },
] as const satisfies ReadonlyArray<{ title: string; icon: SkillIconName }>;

export type SkillCategory = (typeof categories)[number];
export type SkillCategoryTitle = SkillCategory["title"];

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
        icon: 'FaJs',
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

export const usedSkillIcons: SkillIconName[] = [...new Set(skills.map((skill) => skill.icon))];

export const resolveSkillIcon = (iconName: SkillIconName): IconType | undefined => {
    if (iconName in Fa6Icons) {
        return Fa6Icons[iconName as keyof typeof Fa6Icons] as IconType;
    }

    if (iconName.startsWith("Fa")) {
        return FaIcons[iconName as keyof typeof FaIcons] as IconType;
    }

    if (iconName.startsWith("Si")) {
        return SiIcons[iconName as keyof typeof SiIcons] as IconType;
    }

    return undefined;
};