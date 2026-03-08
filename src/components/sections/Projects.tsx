import React, { useState, useRef } from "react";
import { projects, categories } from "../../data/projects";
import {
  Briefcase,
  Sparkles,
  Target,
  Globe,
  Palette,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import FadeIn from "../animations/FadeIn";

const iconMap = {
  All: Sparkles,
  Web: Globe,
  Design: Palette,
  Business: Briefcase,
  Marketing: Target,
  Automation: Zap,
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentIndex(0);

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);

    if (scrollContainerRef.current) {
      const cardWidth =
        (scrollContainerRef.current.firstChild instanceof HTMLElement
          ? scrollContainerRef.current.firstChild.offsetWidth
          : 0);

      scrollContainerRef.current.scrollTo({
        left: index * (cardWidth + 24),
        behavior: "smooth",
      });
    }
  };

  // Responsive: 3 projects per page on lg, 2 on md, 1 on sm
  let projectsPerPage = 3;
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 1024 && window.innerWidth >= 768) {
      projectsPerPage = 2;
    } else if (window.innerWidth < 768) {
      projectsPerPage = 1;
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) scrollToIndex(Math.max(currentIndex - projectsPerPage, 0));
  };

  const nextSlide = () => {
    if (currentIndex < filteredProjects.length - projectsPerPage)
      scrollToIndex(Math.min(currentIndex + projectsPerPage, filteredProjects.length - 1));
  };

  return (
    <section id="projects" className="relative py-20 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">My Projects</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Featured Work
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              A curated selection of projects showcasing my experience across
              development, design, automation, and digital strategy.
            </p>
          </div>
        </FadeIn>

        {/* Categories */}
        <FadeIn delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => {
              const Icon = iconMap[cat as keyof typeof iconMap] || Sparkles;
              const active = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full border transition-all duration-300 ${active
                    ? "bg-primary/20 border-primary text-primary"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Carousel */}
        <FadeIn delay={200}>
          <div className="relative">

            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
            >
              <div className="flex gap-6 pb-4">
                {(() => {
                  // Responsive: 3 projects per page on lg, 2 on md, 1 on sm
                  let projectsPerPage = 3;
                  if (typeof window !== 'undefined') {
                    if (window.innerWidth < 1024 && window.innerWidth >= 768) {
                      projectsPerPage = 2;
                    } else if (window.innerWidth < 768) {
                      projectsPerPage = 1;
                    }
                  }
                  const start = Math.floor(currentIndex / projectsPerPage) * projectsPerPage;
                  const end = start + projectsPerPage;
                  return filteredProjects.slice(start, end).map((project) => (
                    <div key={project.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] shrink-0 snap-start" >
                      <ProjectCard project={project} />
                    </div>
                  ));
                })()}
              </div>
            </div>

            {/* Navigation Arrows */}
            {filteredProjects.length > 3 && (
              <>
                {/* Previous */}
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  aria-label="Previous projects"
                  className="
                    absolute -left-8 lg:-left-15 md:-left-8 top-1/2 -translate-y-1/2 z-20
                    p-3 bg-white/10 hover:bg-white/20
                    rounded-full backdrop-blur border border-white/20
                    disabled:opacity-30 disabled:cursor-not-allowed
                  "
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                {/* Next */}
                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= filteredProjects.length - 1}
                  aria-label="Next projects"
                  className="
                    absolute -right-8 lg:-right-15 md:-right-8 top-1/2 -translate-y-1/2 z-20
                    p-3 bg-white/10 hover:bg-white/20
                    rounded-full backdrop-blur border border-white/20
                    disabled:opacity-30 disabled:cursor-not-allowed
                  "
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Navigation Dots */}
            {filteredProjects.length > 3 && (
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: Math.ceil(filteredProjects.length / projectsPerPage) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index * projectsPerPage)}
                    aria-label={`Go to page ${index + 1}`}
                    className={`
                      rounded-full transition-all duration-300
                      ${currentIndex >= index * projectsPerPage && currentIndex < (index + 1) * projectsPerPage
                        ? "bg-primary w-6 h-2"
                        : "bg-white/30 w-2 h-2 hover:bg-white/50"
                      }
                    `}
                  />
                ))}
              </div>
            )}

          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Projects;
