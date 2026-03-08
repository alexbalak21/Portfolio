import Navbar from "@components/layout/Navbar"
import About from "@components/sections/About"
import Hero from "@components/sections/Hero"
import Projects from "@components/sections/Projects";
import Services from "@components/sections/Services";
import Skills from "@components/sections/Skills";
import Testimonials from "@components/sections/Testimonials";

import { useEffect, useRef } from "react";

export default function App() {
  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.classList.add("scrolling");
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        document.documentElement.classList.remove("scrolling");
      }, 700); // 700ms after scroll ends
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        {/* https://youtu.be/UQVB8fe_b4E?si=OMojL6OQna0xPGZp&t=7054 */}
        <div style={{ height: "2000px" }} />
      </main>
    </div>
  );
}
