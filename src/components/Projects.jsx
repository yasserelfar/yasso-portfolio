import ProjectsCard from './ProjectsCard';
import signify from '../assets/signify.png';
import Astro from '../assets/Astro.jpeg'
import FeedMe from '../assets/FeedMe.png'
import BookStore from '../assets/BookStore.png'
export default function Projects() {
  return (
    <section id="portfolio" className="relative w-full bg-black text-white py-20 px-4 md:px-0 flex flex-col items-center overflow-visible">
      
    
      <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold uppercase mb-12 tracking-wide text-center">Projects</h2>
      <div className="relative z-10 flex flex-col items-center gap-24 w-full">
        <ProjectsCard
          image={signify}
          title="Signify"
          description="Signify is a real-time translator that converts Egyptian Sign Language into Arabic text or speech.
                      It uses AI and computer vision to help people with hearing or speaking difficulties communicate easily and naturally."
          link="#"
          tags={["Website Design", "React", "ML","AI"]}
        />
        <ProjectsCard
          image={Astro}
          title=" Astro fashion "
          description=" The website offers an easy-to-use platform that includes a variety of clothes and accessories, thanks to easy 
                        navigation, high-quality visuals and safe checkout, it It ensures a seamless shopping experience"
          link="#"
          tags={["React", "E-commerce", "Design"]}
          reverse={true}
        />
        <ProjectsCard
          image={FeedMe}
          title="FeedMe"
          description=" My new app simplifies cooking by offering random recipes tailored to the user's available ingredients. Users 
                        input their fridge contents, and the app generates unique recipes based on those ingredients, providing a 
                        creative and practical cooking experience."
          link="#"
          tags={["Flutter", "Design"]}
        />
        <ProjectsCard
          image={BookStore}
          title="Book Store"
          description=" My new app simplifies cooking by offering random recipes tailored to the user's available ingredients. Users 
                        input their fridge contents, and the app generates unique recipes based on those ingredients, providing a 
                        creative and practical cooking experience."
          link="#"
          tags={["Android Native", "Design", "Design pattern"]}
          reverse={true}
        />
      </div>
      {/* Bottom SVG Decorative Line */}
      <div className="absolute left-0 -bottom-8 w-full z-0 flex justify-center pointer-events-none">
        <svg width="90%" height="48" viewBox="0 0 1200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="0,0 0,24 200,24 200,48 1000,48 1000,24 1200,24 1200,0" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </section>
  );
}
