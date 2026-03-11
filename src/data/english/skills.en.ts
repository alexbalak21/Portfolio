const languages = [
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
        icon: 'FaTs',
    },
    {
        name: 'php',
        level: 'Advanced',
        icon: 'FaPhp',
    }
]

const frameworks = [
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
        name: 'Django', 
        level: 'Intermediate',
        icon: 'SiDjango',
    },
    {
        name: 'Flask', 
        level: 'Intermediate',
        icon: 'SiFlask',
    },
    {
        name : 'Laravel',
        level: 'Intermediate',
        icon: 'SiLaravel',
    },
    {
        name: 'Next.js', 
        level: 'Advanced',
        icon: 'SiNextdotjs',
    }
]

const tools = [
    {
        name: 'Git & GitHub',
        level: 'Advanced',
        icon: 'FaGithub',
    },
    {
        name: "Docker",
        level: "Intermediate",
        icon: "FaDocker",
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
    }
]

export const skills = [...languages, ...frameworks, ...tools];