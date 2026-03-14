import { SiTypescript, SiTailwindcss, SiDocker, SiGithub } from "react-icons/si";
import { FaJava, FaPython, FaServer } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { PERSONAL_INFO } from "@utils/constants.en";
import RadialGradientBackground from "@components/backgrounds/RadialGradientBackground";
import WaveBackground from "@components/backgrounds/WaveBackground";
import FadeIn from "@components/animations/FadeIn";
import { AppWindow, Code2, Download, Zap } from "lucide-react";
import { ABOUT_DATA as ABOUT_DATA_EN } from "@data/english/about.en";
import { ABOUT_DATA as ABOUT_DATA_FR } from "@data/french/about.fr";
import { useLanguage } from "@context/LanguageContext";

const About = () => {
  const { lang } = useLanguage();
  const ABOUT_DATA = lang === 'fr' ? ABOUT_DATA_FR : ABOUT_DATA_EN;

  const skills = [
    { name: "Java", icon: FaJava, color: "#61DAFB" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "GitHub", icon: SiGithub, color: "#211F20" }
  ];

  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      <RadialGradientBackground variant="about" />
      {/* <WaveBackground variant="section" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">

              {/* Title */}
              <FadeIn delay={60}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                  <FaCode className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">{ABOUT_DATA.presentation_title}</span>
                  <FaServer className="w-4 h-4 text-primary" />
                </div>
              </FadeIn>

              {/* Subtitle */}
              <FadeIn delay={100}>
                <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                  {ABOUT_DATA.title}
                </h2>
              </FadeIn>

              {/* Bio */}
              <FadeIn delay={200}>
                <div className="flex flex-col gap-4">
                  {ABOUT_DATA.bio.map((paragraph, index) => (
                    <p key={index} className="text-base text-white/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>

              {/* Stats */}
              <FadeIn delay={300}>
                <div className="grid grid-cols-3 gap-8">
                  {ABOUT_DATA.STATS_ITEMS.map((stat, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>
                      <div className="text-3xl font-normal text-white mb-2 font-mono">{stat.value}</div>
                      <p className="text-sm text-white/60 leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Resume Button */}
              <FadeIn delay={400}>
                <button
                  onClick={() => window.open(PERSONAL_INFO.resume)}
                  className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                  {ABOUT_DATA.DOWNLOAD_CV}
                </button>
              </FadeIn>

            </div>
          </div>

          {/* Right Column */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">

              {/* Expertise Card */}
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <AppWindow className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{ABOUT_DATA.top_card.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {ABOUT_DATA.top_card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Code */}
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{ABOUT_DATA.code_card.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {ABOUT_DATA.code_card.description}
                  </p>
                </div>
              </div>

              {/* Performance */}
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{ABOUT_DATA.performance_card.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {ABOUT_DATA.performance_card.description}
                  </p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    {ABOUT_DATA.STATS_ROW.map((item, index) => (
                      <div key={index}>
                        <div className="text-xl font-bold text-primary mb-1">{item.title}</div>
                        <div className="text-xs text-white/60">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>

        {/* Skills Grid Section */}
        <FadeIn delay={500}>
          <div className="flex flex-col items-center gap-8">
            <div className="text-center max-w-2xl">
              <h3 className="text-3xl text-white mb-2">
                {ABOUT_DATA.SKILLS_TITLE}
              </h3>
              <p className="text-md text-white/60">
                {ABOUT_DATA.SKILLS_DESCRIPTION}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                >
                  <skill.icon className="text-3xl text-primary" />
                  <div className="text-sm text-white/80 font-medium text-center">
                    {skill.name}
                  </div>
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default About;
