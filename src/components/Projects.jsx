import ProjectsCard from './ProjectsCard';
import signify from '../assets/signify.png';
import Astro from '../assets/Astro.jpeg'
import FeedMe from '../assets/FeedMe.png'
import BookStore from '../assets/BookStore.png'
var signifyLink="https://www.linkedin.com/posts/yasser-muhamed-00b534234_graduationproject-signlanguage-machinelearning-activity-7349886752381120513-74Qf?utm_source=share&utm_medium=member_android&rcm=ACoAADp0igsBMb0bLzWBBnG6F5PNOFM4F-j8Wcs"
var FeedMeLink="https://drive.google.com/file/d/1uCY4-qeLGFfxZn1vGTJbVn751M2htifG/view?usp=drivesdk"
var BookStoreLink="https://drive.google.com/file/d/1uCseK29UpGRyQcq9rcsgN1Y2ajhpJI71/view?usp=drivesdk"
var AstroLink="https://github.com/yasserelfar/Astro_React/tree/origin"
export default function Projects() {  
  return (
    <section id="portfolio" className="relative w-full bg-black text-white py-20 px-4 md:px-0 flex flex-col items-center overflow-visible">
      
    
      <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold uppercase mb-12 tracking-wide text-center">Projects</h2>
      <div className="relative z-10 flex flex-col items-center gap-14 w-full">
        <ProjectsCard
          image={signify}
          title="Signify"
          description="Signify is a real-time translator that converts Egyptian Sign Language into Arabic text or speech.
                      It uses AI and computer vision to help people with hearing or speaking difficulties communicate easily and naturally."
          link={signifyLink}
          tags={["Website Design", "React", "ML","AI"]}
        />
        <ProjectsCard
          image={Astro}
          title=" Astro fashion "
          description=" The website offers an easy-to-use platform that includes a variety of clothes and accessories, thanks to easy 
                        navigation, high-quality visuals and safe checkout, it It ensures a seamless shopping experience"
          link={AstroLink}
          tags={["React", "E-commerce", "Design"]}
          reverse={true}
        />
        <ProjectsCard
          image={FeedMe}
          title="FeedMe"
          description=" My new app simplifies cooking by offering random recipes tailored to the user's available ingredients. Users 
                        input their fridge contents, and the app generates unique recipes based on those ingredients, providing a 
                        creative and practical cooking experience."
          link={FeedMeLink}
          tags={["Flutter", "Design"]}
        />
        <ProjectsCard
          image={BookStore}
          title="Book Store"
          description="A mobile app with smart search (text, voice, camera, barcode) and a clear admin panel to manage products and orders.
Built using clean code and multiple Design Patterns for scalability and easy maintenance.
"
          link={BookStoreLink}
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
