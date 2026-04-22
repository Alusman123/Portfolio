import { Resume } from './Aboutme';
import { TechStack } from './TechStack';
import { Projects } from './Porjects';
import { Experince } from './Experince';

type Section = "about" | "projects" | "techstack" | "experience";

interface MainpageProps {
  active: Section;
}

export function Mainpage({ active }: MainpageProps) {
  return (
    <div className="relative z-10 flex flex-col">
      <div className='bg-black text-white px-10 border-2 rounded-[20px]'>
        {active === "projects" && <Projects />}
        {active === "techstack" && <TechStack />}
        {active === "experience" && <Experince />}
        {active === "about" && <Resume />}
      </div>
    </div>
  );
}