import yassoImg from '../assets/yasso2.jpg';
import "./hero.css"
import { motion } from 'framer-motion';

export default function WhatIDo() {
  return (
    <>
      <section id="what-i-do" className="w-full bg-black text-white py-12 sm:py-20 px-2 sm:px-4 flex flex-col items-center relative overflow-hidden">
        <div className="flex flex-row items-center justify-center max-w-6xl w-full gap-8 lg:gap-20">
          {/* Image Left */}
          <motion.div
            className="flex-1 flex items-center justify-center mb-6 lg:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <img src={yassoImg} alt="Workspace" className="rounded-2xl shadow-2xl w-full max-w-full sm:max-w-md object-cover object-center" />
          </motion.div>
          {/* Text Right */}
          <div className="flex-1 flex flex-col justify-center items-start">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase mb-6 sm:mb-8 tracking-wide"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
            >
              What I Do
            </motion.h2>
            <motion.div
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold uppercase mb-2 tracking-wide">Design</h3>
              <p className="text-zinc-300 text-base sm:text-lg lg:text-xl">
                I design powerful websites that help modern businesses thrive. My focus is on delivering visual appeal and user-friendly experience.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold uppercase mb-2 tracking-wide">Development</h3>
              <p className="text-zinc-300 text-base sm:text-lg lg:text-xl">
                Using modern tools, I create flexible and powerful websites tailored to your needs. Fast, responsive, and easy to manage.
              </p>
            </motion.div>
          </div>
        </div>
        {/* خط بعد القسم */}
        <motion.div
          className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-orange-500 via-white/60 to-orange-500 mb-5"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
          style={{ transformOrigin: 'left' }}
        />
      </section>
    </>
  );
}
