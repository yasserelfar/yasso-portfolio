import Navbar from './components/NavBar'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Projects from './components/Projects'
import Footer from   './components/Footer'
import ContactSection from './components/ContactSection'
import Admin from './components/Admin'
import { useProjects } from './hooks/useProjects'
export default function App() {
  const [projects, setProjects] = useProjects()

  if (window.location.hash === '#admin') {
    return <Admin projects={projects} setProjects={setProjects} />
  }

  return (
    <div className="bg-black  text-white">
      <Navbar />
      <Hero />
      <Projects projects={projects} />
      <WhatIDo />
      <ContactSection />
      <Footer />
      {/* Projects و WhatIDo و Footer هيكملوا هنا */}
    </div>
  )
}
