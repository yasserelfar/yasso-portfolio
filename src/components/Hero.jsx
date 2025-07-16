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
      className="Hero md:bg-[position:0rem_0px] p-10 rounded-md relative min-h-screen flex items-stretch bg-black text-white overflow-hidden group"
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
                    words={["Front-End "]}
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
              I create visually stunning and functional websites for businesses worldwide. If you’re looking for a sleek, high-performing website, drop me an email. If we’re aligned, I’ll provide a timeline and pricing.
            </motion.p>
            <motion.a
              href="#portfolio"
              className="inline-block border border-white px-8 py-3 text-lg font-medium rounded transition hover:bg-white hover:text-black"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: false }}
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
        {/* Right Side: Image with gradient overlay */}
      </div>
    </section>
  );
}
