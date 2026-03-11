import {
  categories,
  resolveSkillIcon,
  skillsByCategory,
  type EnglishSkill,
} from "../../data/english/skills.en";
type SkillLevel = "Expert" | "Advanced" | "Intermediate";
import {
  Code2,
  Wrench,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";

const Skills = () => {
  const skillCategories: Record<string, EnglishSkill[]> = skillsByCategory;

  // Level color
  const getLevelColor = (level: SkillLevel) => {
    const colors = {
      Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
      Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
      Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
    };
    return colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/30";
  };

  const getProficiencyLevel = (level: string) => {
    switch (level) {
      case "Expert":
        return 100;
      case "Advanced":
        return 80;
      case "Intermediate":
        return 60;
      case "Beginner":
        return 40;
      default:
        return 40;
    }
  };

  return (
    <section id="skills" className="relative py-20 bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Wrench className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">My Expertise</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Skills & Technologies
              </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiencies,
              showcasing the tools and technologies I excel in to create
              impactful digital solutions.
            </p>
          </div>
        </FadeIn>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <FadeIn key={category} delay={categoryIndex * 100}>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-1 h-8 bg-linear-to-b from-primary/10 rounded-full"></div>
                  <h3 className="text-xl font-medium text-white">{category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {skillCategories[category].map((skill) => {
                    if (!skill) return null;
                    const IconComponent = resolveSkillIcon(skill.icon) || Code2;
                    const proficiency = getProficiencyLevel(skill.level);

                    return (
                      <div key={`${category}-${skill.name}`} className="space-y-2">
                        <div className="flex items-center justify-between">
                          {/* Icon */}
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/5 rounded-lg">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                          </div>

                          {/* Info */}
                          <div>
                            <div className="text-sm font-medium text-white">
                              {skill.name}
                            </div>
                            <span
                              className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(
                                skill.level as SkillLevel
                              )}`}
                            >
                              {skill.level}
                            </span>
                          </div>
                        </div>

                        {/* Proficiency Bar */}
                        <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="absolute top-0 left-0 h-full bg-linear-to-r from-primary/10 to-primary/80 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none "></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
