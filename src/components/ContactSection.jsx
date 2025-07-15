import yassoImg from '../assets/yasso2.jpg';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full flex flex-row min-h-[300px] lg:min-h-[400px] bg-black relative overflow-hidden">
      {/* Left: Title */}
      <div className="flex-1 flex items-center justify-center bg-black px-2 sm:px-4 py-8 lg:py-0">
        <h2 className="text-xl sm:text-3xl lg:text-6xl font-extrabold uppercase text-white text-center">
          Want to work<br className="hidden sm:block" /> together?
        </h2>
      </div>
      {/* Right: Image with overlay and text */}
      <div className="flex-1 relative flex items-center justify-center min-h-[180px] sm:min-h-[220px]">
        <img
          src={yassoImg}
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex items-center justify-center w-full h-full px-2 sm:px-4 py-6">
          <p className="text-white text-xs sm:text-lg lg:text-2xl text-center max-w-xl mx-auto">
            If you're looking for a modern, high-impact website for your business, startup, or personal brand, feel free to <a href="#contact" className="underline font-bold">contact me here</a>.
          </p>
        </div>
      </div>
    
    </section>
  );
} 