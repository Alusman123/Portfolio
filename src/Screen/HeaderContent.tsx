import Profile from "../assets/Profilepic.jpg"

type Section = "about" | "projects" | "techstack" | "experience";

interface HeaderProps {
  active: Section;
  setActive: (section: Section) => void;
}

export function Header({ active, setActive }: HeaderProps) {
  const navItems: { label: string; id: Section }[] = [
    { label: "About Me", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Tech Stack", id: "techstack" },
    { label: "Experience", id: "experience" },
  ];

  return (
    <div className='flex items-center justify-between w-full'>
      <div className="flex justify-center items-center flex-row gap-3">
        <img
          src={Profile}
          alt="Profile"
          className="w-14 h-14 rounded-full object-cover border-[0.5px] border-white"
        />
        <div className='text-white text-2xl font-bold tracking-widest uppercase'>
          Portfolio
        </div>
      </div>

      <nav className='flex gap-6'>
        {navItems.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`border-[0.5px] border-white rounded-[20px] px-4 py-1 transition-colors duration-200
              ${active === id
                ? "bg-white text-black"
                : "text-white hover:bg-white hover:text-black"
              }`}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}