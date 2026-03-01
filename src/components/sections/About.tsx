import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb 
} from "react-icons/si";

import RadialGradientBackground from "@components/backgrounds/RadialGradientBackground";
import FadeIn from "@components/animations/FadeIn";
import { Code2, Sparkles, Download } from "lucide-react";

const About = () => {
  const skills = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
  ];

  return (
    <section id="about" className="">
      <RadialGradientBackground variant="about" />

      <div className="">
        <div className="">
          <div className="">
            <div className="">

              {/* Title */}
              <FadeIn delay={60}>
                <div className="">
                  <Code2 className="" />
                  <span className="">Full-Stack Developer</span>
                  <Sparkles className="" />
                </div>
              </FadeIn>

              {/* Subtitle */}
              <FadeIn delay={100}>
                <h2 className="">
                  Crafting Digital Experiences That Matter
                </h2>
              </FadeIn>

              {/* Bio */}
              <FadeIn delay={200}>
                <div className="">
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p key={index} className="">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>

              {/* Stats */}
              <FadeIn delay={300}>
                <div className="">
                  {ABOUT_STATS.map((stat, index) => (
                    <div key={index} className="">
                      <div className=""></div>
                      <div className="">{stat.value}</div>
                      <p className="">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Resume Button */}
              <FadeIn delay={400}>
                <button
                  onClick={() => window.open(PERSONAL_INFO.resume)}
                  className=""
                >
                  <Download className="" />
                  Download Resume
                </button>
              </FadeIn>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
