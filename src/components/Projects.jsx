import ProjectsCard from './ProjectsCard';

export default function Projects({ projects }) {
  return (
    <section
      id="portfolio"
      className="relative w-full bg-black text-white py-20 px-4 md:px-0 flex flex-col items-center overflow-visible"
    >
      <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold uppercase mb-12 tracking-wide text-center">
        Projects
      </h2>
      <div className="relative z-10 flex w-full flex-col items-center gap-14">
        {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>
      {/* Bottom SVG Decorative Line */}
      <div className="absolute left-0 -bottom-8 w-full z-0 flex justify-center pointer-events-none">
        <svg
          width="90%"
          height="48"
          viewBox="0 0 1200 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            points="0,0 0,24 200,24 200,48 1000,48 1000,24 1200,24 1200,0"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
