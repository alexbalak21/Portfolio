import Navbar from "@components/layout/Navbar"
import About from "@components/sections/About"
import Hero from "@components/sections/Hero"

export default function App() {
  return (
    <div className="min-h-screen bg-black pb-[100vh]">
      <Navbar />

      <main>
        <Hero /> 
        <About />
      </main> 
    </div>
  )
}
