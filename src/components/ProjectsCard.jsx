import { motion } from "framer-motion";  

export default function ProjectsCard({
  image,
  title,
  description,
  link,
  githubLink,
  tags = [],
  reverse = false,
}) {
  // flex-col-reverse على الموبايل، flex-row أو flex-row-reverse على lg
  const flexDirection = reverse
    ? "flex-col-reverse lg:flex-row-reverse"
    : "flex-col-reverse lg:flex-row pl-0";
  const imagePosition = reverse
    ? "lg:-ml-16 lg:translate-x-8"
    : "lg:-mr-16 lg:-translate-x-8";

  return (
    <motion.div
      className={`relative flex ${flexDirection} bg-black text-white my-10 lg:my-14 max-w-6xl w-11/12 mx-auto items-stretch rounded-lg overflow-hidden shadow-lg gap-6`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      {/* Border - hide on small screens */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none hidden sm:block"
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points="0,420 0,56 56,56 56,0 1144,0 1144,56 1200,56 1200,420 0,420"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
        />
      </svg>

      {/* Content + Image (ترتيب خاص للموبايل) */}
      <div className="flex flex-col flex-1 justify-center p-6 sm:p-8 lg:p-12 gap-4 items-center lg:items-start">
        <motion.h3
          className="text-2xl sm:text-3xl lg:text-5xl font-extrabold uppercase mb-2 leading-tight text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: false }}
        >
          {title}
        </motion.h3>

        <motion.div
          className="flex flex-wrap gap-2 lg:gap-3 mb-2 lg:mb-6 justify-center lg:justify-start"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false }}
        >
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-zinc-800 text-xs px-3 py-1 rounded font-bold tracking-wide uppercase text-orange-500"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <div className="block lg:hidden w-full flex items-center justify-center my-2">
          <motion.img
            src={image}
            alt={title}
            // 1. شيلنا transition-all و duration-300 و hover:scale-105 من هنا
            className={`rounded-lg shadow-2xl w-full max-w-xs object-cover object-center ${imagePosition}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            // 2. ضيفنا الهوفر هنا تبع Framer Motion
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
          />
        </div>

        <motion.p
          className="mb-4 lg:mb-8 text-zinc-200 text-sm sm:text-base lg:text-lg max-w-2xl text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
        >
          {description}
        </motion.p>

        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-orange-500 px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-medium rounded transition hover:bg-orange-500 hover:text-black text-center w-full sm:w-auto mb-4 lg:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: false }}
        >
          View This Project
        </motion.a>
        {githubLink && (
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-zinc-500 px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-medium rounded transition hover:bg-zinc-800 text-center w-full sm:w-auto mb-4 lg:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: false }}
          >
            View Code
          </motion.a>
        )}
      </div>

      {/* Image - تظهر فقط على الشاشات الكبيرة */}
      <motion.div
        className="hidden lg:flex relative z-20 flex-1 items-center justify-center p-6 sm:p-8 lg:p-12"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <motion.img
          src={image}
          alt={title}
          // 1. شيلنا transition-all و duration-300 و hover:scale-105 من هنا
          className={`rounded-lg shadow-2xl w-full max-w-xs object-cover object-center ${imagePosition}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // 2. ضيفنا الهوفر هنا تبع Framer Motion
          whileHover={{ scale: 1.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false }}
        />

        <div className="bg-white/20 h-px mt-[60px]"></div>
      </motion.div>
      <div className="block lg:hidden bg-white/20 h-px mt-[60px]"></div>
    </motion.div>
  );
}