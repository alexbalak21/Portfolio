import FadeIn from "@components/animations/FadeIn";
import { history } from "@data/english/expiriance.en";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wider uppercase">My Journey</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-2xl mx-auto">
              Professional Experience
            </h2>

            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Building scalable solutions across different industries and technologies
            </p>
          </div>
        </FadeIn>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {history.map((item, index) => (
            <FadeIn key={index} delay={100 + index * 100}>
              <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full">
                {/* Card Content */}
                <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
                  {/* Logo */}
                  <div className="shrink-0">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={item.imageSrc}
                        alt={item.organisation}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-2">
                        {item.role} at {item.organisation}
                      </h3>
                      <p className="text-sm md:text-base text-primary/80 font-medium">
                        {item.startDate} — {item.endDate}
                      </p>
                    </div>

                    {/* Experiences List */}
                    <ul className="space-y-2">
                      {item.experiences.map((experience, expIndex) => (
                        <li
                          key={expIndex}
                          className="text-sm md:text-base text-white/70 flex items-start gap-3"
                        >
                          <span className="text-primary shrink-0">▸</span>
                          <span>{experience}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
