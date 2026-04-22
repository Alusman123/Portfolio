import Profile from "../assets/Profilepic.jpg"
import { useState } from "react"

type Section = "about" | "projects" | "techstack" | "experience" | null;

interface HeaderProps {
  active: Section;
  setActive: (section: Section) => void;
  onLogoClick: () => void;
  showLanding: boolean;
}

export function Header({ active, setActive, onLogoClick, showLanding }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: { label: string; id: Section }[] = [
    { label: "About Me", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Tech Stack", id: "techstack" },
    { label: "Experience", id: "experience" },
  ];

  const handleNavClick = (id: Section) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div className='flex items-center justify-between w-full px-6 md:px-0'>
      {/* Logo */}
      <div
        onClick={onLogoClick}
        className="md:ml-[200px] flex justify-center items-center flex-row gap-3 cursor-pointer"
      >
        <img
          src={Profile}
          alt="Profile"
          className="w-14 h-14 rounded-full object-cover border-[0.5px] border-white"
        />
        <div className='text-white text-2xl font-bold tracking-widest uppercase'>
          Y3K
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className='hidden md:flex gap-6 mr-[200px]'>
        {navItems.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`border-[0.5px] border-white rounded-[20px] px-4 py-1 transition-colors duration-200
              ${!showLanding && active === id
                ? "bg-white text-black"
                : "text-white hover:bg-white hover:text-black"
              }`}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Hamburger Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full flex flex-col items-center gap-4 py-6 bg-black/90 backdrop-blur-sm z-50">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`border-[0.5px] border-white rounded-[20px] px-6 py-2 transition-colors duration-200 w-40
                ${!showLanding && active === id
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}