import Navbar from "@components/layout/Navbar"
import About from "@components/sections/About"
import Hero from "@components/sections/Hero"
import Skills from "@components/sections/Skills";

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
        <div style={{ height: "2000px" }} />
      </main>
    </div>
  );
}
