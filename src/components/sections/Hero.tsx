import { scrollToSection } from "@hooks/useScrollSpy";
import { SECTION_OFFSETS } from "@utils/offsets";
import FadeIn from "@components/animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import WaveBackground from "@components/backgrounds/WaveBackground";
import { ChevronDown } from "lucide-react";
import { FaDatabase } from "react-icons/fa";
import { SiReact, SiSpring, SiPython, SiTypescript, SiGithub } from "react-icons/si";
import { STATS as STATS_EN, HERO_INFO as HERO_INFO_EN, GET_IN_TOUCH as GET_IN_TOUCH_EN } from "@data/english/hero.en";
import { STATS as STATS_FR, HERO_INFO as HERO_INFO_FR, GET_IN_TOUCH as GET_IN_TOUCH_FR } from "@data/french/hero.fr";
import { useLanguage } from "@context/LanguageContext";

const Hero = () => {
  const { lang } = useLanguage();
  const HERO_INFO = lang === 'fr' ? HERO_INFO_FR : HERO_INFO_EN;
  const STATS = lang === 'fr' ? STATS_FR : STATS_EN;
  const GET_IN_TOUCH = lang === 'fr' ? GET_IN_TOUCH_FR : GET_IN_TOUCH_EN;
  const basedInLabel = lang === 'fr' ? 'Basé à' : 'Based in';

  return (
    <section className="relative w-full overflow-hidden">
      <RadialGradientBackground variant="hero" />
      {/* <WaveBackground variant="hero" /> */}

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="flex flex-col gap-6">

            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2.75 mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <FaDatabase className="w-4 h-4 text-white fill-white" />
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {HERO_INFO.short_title} • {basedInLabel} {HERO_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal Itext-white mb-6 leading-tight">
                {HERO_INFO.title}
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-137.5 mb-8">
                {HERO_INFO.description}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact", SECTION_OFFSETS['contact'] || 110, 600)}
                className="inline-flex items-center gap-0 mb-12 group"
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-6 py-3 text-base font-medium border border-white hover:bg-white/90 transition-all duration-300 group-hover:translate-y-0.5">
                  {GET_IN_TOUCH}
                </div>
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat, index) => (
                  <div key={index} className="text-left border-r border-white/50 pr-10 last:border-r-0">
                    <div className="text-2xl font-normal text-primary mb-2 font-mono">{stat.value}</div>
                    <p className="text-sm text-white leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Developer Image */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-125 ml-auto group">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-1 bg-linear-to-r from-primary/10 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                </div>
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden m-px h-[calc(100%-2px)]">
                  <img
                    src="/images/portrait.jpg" alt="Developer at work" className="w-full h-full object-cover" />
                </div>

                {/* Technology Logos */}
                <div className="absolute bottom-6 left-6 z20 ">
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiSpring className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiReact className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiPython className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiTypescript className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiGithub className="w-full h-full text-primary" />
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      {/* Scroll Indicator */}
      <button onClick={() => scrollToSection('about', SECTION_OFFSETS['about'])}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-100">
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
