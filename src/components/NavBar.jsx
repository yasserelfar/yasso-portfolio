export default function Navbar() {
  return (
    <nav className="Nav w-full flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 fixed top-0 left-0 z-20 bg-black/80 backdrop-blur-md">
      {/* User's name on the left */}
      <div className="text-white text-base sm:text-lg tracking-widest font-light uppercase">Yasso</div>
      {/* Navigation links on the right */}
      <ul className="flex gap-4 sm:gap-10 text-white text-sm sm:text-base font-normal">
        <li>
          <a href="#portfolio" className="inline-block hover:text-orange-500 duration-300 hover:scale-110 transition">
            My Portfolio</a>
        </li>
        <li>
          <a href="#contact" className="inline-block hover:text-orange-500 duration-300 hover:scale-110 transition">
            Get In Touch
          </a>
        </li>
      </ul>
    </nav>
  );
}
