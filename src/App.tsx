import { useEffect, useRef } from "react";
import { LanguageProvider } from "@context/LanguageContext";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";
import React, { Suspense } from "react";
const Hero = React.lazy(() => import("@components/sections/Hero"));
const About = React.lazy(() => import("@components/sections/About"));
const Skills = React.lazy(() => import("@components/sections/Skills"));
const Projects = React.lazy(() => import("@components/sections/Projects"));
const Experience = React.lazy(() => import("@components/sections/Experience"));
const Testimonials = React.lazy(() => import("@components/sections/Testimonials"));
const Contact = React.lazy(() => import("@components/sections/Contact"));

export default function App() {
  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.classList.add("scrolling");
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        document.documentElement.classList.remove("scrolling");
      }, 700);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main>
          <Suspense fallback={<div className="text-white text-center py-8">Loading...</div>}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
