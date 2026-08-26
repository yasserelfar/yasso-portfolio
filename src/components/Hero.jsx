import "./hero.css"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const [showTypewriter, setShowTypewriter] = useState(false);
  const wasInView = useRef(false);

  useEffect(() => {
    // Only trigger when inView changes from false to true
    if (inView && !wasInView.current) {
      setShowTypewriter(false); // Reset
      setTimeout(() => setShowTypewriter(true), 50); // Restart after short delay
    }
    wasInView.current = inView;
    if (!inView) setShowTypewriter(false);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="Hero md:bg-[position:0rem_0px] p-10 pt-28 sm:pt-32 rounded-md relative min-h-screen flex items-stretch bg-black text-white overflow-hidden group"
    >
      <div className="w-full h-full filter grayscale group-hover:filter-none transition duration-500 flex items-stretch">
        {/* Left Side */}
        <motion.div
          className="relative z-10 flex flex-col justify-between flex-1 px-8 py-10 md:py-16 group"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <div className="">
            <div className="text-lg tracking-widest font-light mb-12"> </div>
            <motion.h1
              className="text-4xl  md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Hi, I’m Yasser Elfar,<br />
              <span className="text-orange-600">
                {showTypewriter && (
                  <Typewriter
                    key={inView ? "show" : "hide"}
                    words={["Full Stack "]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    delaySpeed={10000000000000}
                  />
                )}
              </span>
              <br />
              Developer
            </motion.h1>
            <motion.p
              className="mb-8 max-w-md text-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: false }}
            >
I build full-stack products end to end: React on the front, Node.js, PostgreSQL and .NET Core on the back. Need someone who can take a project from idea to launch? Email me and I'll send back a timeline and pricing.            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#portfolio"
                className="inline-block border border-white px-8 py-3 text-lg font-medium rounded transition hover:bg-white hover:text-black text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                viewport={{ once: false }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1IUJ9SNnRgOpKXXJ8BDDyKc6ozq8GF5qG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-orange-500 text-orange-500 px-8 py-3 text-lg font-medium rounded transition hover:bg-orange-500 hover:text-black text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                viewport={{ once: false }}
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>
        {/* Right Side: Image with gradient overlay */}
      </div>
    </section>
  );
}
