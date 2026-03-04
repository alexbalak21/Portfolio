import FadeIn from "@components/animations/FadeIn";
import { Wrench, Layout, Smartphone, Palette, Code2, Zap } from "lucide-react";
import { services } from "../../data/services";

const iconMap = {
  Layout,
  Smartphone,
  Palette,
  Code2,
  Zap,
};
// https://youtu.be/UQVB8fe_b4E?si=O0s9agR0rd9qZ9Cd&t=6064
const Services = () => {
  return (
    <section id="services" className="">
      <div className="">
        <div className="" />
        <div className="" />
        <div className="" />
      </div>

      <div
        className=""
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="">
        <FadeIn delay={0}>
          <div className="">
            <div className="">
              <Wrench className="" />
              <span className="">What I Offer</span>
            </div>

            <h2 className="">
              Built for innovation. Designed for results.
            </h2>

            <p className="">
              Comprehensive solutions to transform your ideas
            </p>
          </div>
        </FadeIn>

        {/* First row */}
        <div className="">
          {services.slice(0, 2).map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code2;
            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className="">
                  <div className="">
                    <div className="">
                      <IconComponent className="" />
                    </div>
                  </div>
                  <div className="">
                    <h3 className="">{service.title}</h3>
                    <p className="">{service.description}</p>
                  </div>
                  <div className="" />
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Second row */}
        <div className="">
          {services.slice(2).map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code2;
            return (
              <FadeIn key={service.id} delay={300 + index * 100}>
                <div className="">
                  <div className="">
                    <div className="">
                      <IconComponent className="" />
                    </div>
                  </div>
                  <div>
                    <h3 className="">{service.title}</h3>
                    <p className="">{service.description}</p>
                  </div>
                  <div className="" />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;