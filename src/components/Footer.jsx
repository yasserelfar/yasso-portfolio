export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-300 py-6 sm:py-8 flex flex-col items-center mt-8 sm:mt-12 text-center gap-2">
      <div className="text-xs sm:text-sm mb-1 sm:mb-2">© {new Date().getFullYear()} All rights reserved – Yasso</div>
      {/* Social links placeholder (optional) */}
      {/* <div className="flex gap-4 mt-2">
        <a href="#" className="hover:text-white transition">LinkedIn</a>
        <a href="#" className="hover:text-white transition">GitHub</a>
      </div> */}
    </footer>
  );
}
