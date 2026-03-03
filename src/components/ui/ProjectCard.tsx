import { ExternalLink, Github, TrendingUp } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  metrics?: string;
  demoUrl?: string;
  githubUrl?: string;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    description,
    image,
    demoUrl,
    githubUrl,
    technologies = [],
    metrics,
  } = project;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group">

      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Action buttons */}
        <div className="absolute bottom-4 right-4 flex items-center gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Demo"
              className="p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Code"
              className="p-3 bg-black/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary/90 transition-colors duration-300 ">
            {title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-2xl hover:bg-primary/20 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {metrics && (
          <div className="flex items-center gap-2 pt-3 border-t border-white/10 ">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <p className="text-sm font-medium text-green-400">{metrics}</p>
          </div>
        )}
      </div>
    </div>
  );
}
