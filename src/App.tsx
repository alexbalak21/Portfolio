import Navbar from "@components/layout/Navbar"
import About from "@components/sections/About"
import Contact from "@components/sections/Contact";
import Footer from "@components/sections/Footer";
import Hero from "@components/sections/Hero"
import Projects from "@components/sections/Projects";
import Experience from "@components/sections/Experience";
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
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
