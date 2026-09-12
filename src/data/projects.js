import signify from '../assets/signify.png';
import Astro from '../assets/Astro.jpeg';
import FeedMe from '../assets/FeedMe.png';
import BookStore from '../assets/BookStore.png';
import Xora from '../assets/xora.svg';
import ClinicImage from '../assets/Clinic.png';

export const initialProjects = [
  {
    id: 'clinic-management',
    image: ClinicImage,
    title: 'Clinic Management System',
    description: 'A full-stack ASP.NET Core app that takes a clinic from patient registration to diagnosis, with role-based dashboards for Admin, Doctor, and Reception, automatic doctor matching, and full patient history across every visit.',
    link: 'https://lnkd.in/p/eyTRq9hg',
    githubLink: 'https://github.com/yasserelfar/Clinic-Mangment.git',
    tags: ['ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'MVC Architecture Healthcare'],
    reverse: false,
  },
  {
    id: 'signify',
    image: signify,
    title: 'Signify',
    description: 'Signify is a real-time translator that converts Egyptian Sign Language into Arabic text or speech. It uses AI and computer vision to help people with hearing or speaking difficulties communicate easily and naturally.',
    link: 'https://www.linkedin.com/posts/yasser-muhamed-00b534234_graduationproject-signlanguage-machinelearning-activity-7349886752381120513-74Qf?utm_source=share&utm_medium=member_android&rcm=ACoAADp0igsBMb0bLzWBBnG6F5PNOFM4F-j8Wcs',
    githubLink: 'https://github.com/yasserelfar/signify',
    tags: ['Website Design', 'React', 'ML', 'AI'],
    reverse: false,
  },
  {
    id: 'xora',
    image: Xora,
    title: 'Xora | SaaS landing page',
    description: 'XORA AI Video Editor designed to be easy to use, quick to learn, and surprisingly powerful.',
    link: 'https://yasserelfar.github.io/sass_landing_page/',
    githubLink: '',
    tags: ['React/Vite', 'Tailwind', 'Design'],
    reverse: true,
  },
  {
    id: 'astro',
    image: Astro,
    title: 'Astro Fashion',
    description: 'The website offers an easy-to-use platform with a variety of clothes and accessories, high-quality visuals, safe checkout, and seamless navigation.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7353063090747277313/',
    githubLink: 'https://github.com/yasserelfar/Astro_React',
    tags: ['React', 'E-commerce', 'Design'],
    reverse: false,
  },
  {
    id: 'feedme',
    image: FeedMe,
    title: 'FeedMe',
    description: "FeedMe simplifies cooking by offering random recipes tailored to the user's available ingredients.",
    link: 'https://drive.google.com/file/d/1uCY4-qeLGFfxZn1vGTJbVn751M2htifG/view?usp=drivesdk',
    githubLink: 'https://github.com/yasserelfar/FeedMe_2',
    tags: ['Flutter', 'Design'],
    reverse: true,
  },
  {
    id: 'book-store',
    image: BookStore,
    title: 'Book Store',
    description: 'A mobile app with smart search using text, voice, camera, and barcode, plus an admin panel to manage products and orders.',
    link: 'https://drive.google.com/file/d/1uCseK29UpGRyQcq9rcsgN1Y2ajhpJI71/view?usp=drivesdk',
    githubLink: 'https://github.com/yasserelfar/OnlineBookStore',
    tags: ['Android Native', 'Design', 'Design Patterns'],
    reverse: false,
  },
];