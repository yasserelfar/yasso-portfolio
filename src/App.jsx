import Navbar from './components/NavBar'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Projects from './components/Projects'
import Footer from   './components/Footer'
import ContactSection from './components/ContactSection'
export default function App() {
  return (
    <div className="bg-black  text-white">
      <Navbar />
      <Hero />
      <Projects />
      <WhatIDo />
      <ContactSection />
      <Footer />
      {/* Projects و WhatIDo و Footer هيكملوا هنا */}
    </div>
  )
}
