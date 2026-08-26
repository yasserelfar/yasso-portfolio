export default function Footer() {
  var contactLink="https://www.linkedin.com/in/yasser-muhamed-00b534234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  return (
    <footer className="w-full bg-zinc-950 text-zinc-300 py-6 sm:py-8 flex flex-col items-center mt-8 sm:mt-12 text-center gap-2">
      <div className="text-xs sm:text-sm mb-1 sm:mb-2">© {new Date().getFullYear()} All rights reserved – Yasso</div>
      <div className="flex gap-4 mt-2">
        <a href={contactLink} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">LinkedIn</a>
        <a href="https://github.com/yasserelfar" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">GitHub</a>
        <a href="https://wa.me/201278094294" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">WhatsApp</a>
      </div>
    </footer>
  );
}
