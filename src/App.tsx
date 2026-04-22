import { useState } from 'react'
import './App.css'
import { Mainpage } from './Screen/MainPage';
import { Header } from './Screen/HeaderContent';
import { Landing } from './Screen/LandingPage';
import TopoBg from './assets/topgif.mp4';

type Section = "about" | "projects" | "techstack" | "experience" | null;

function App() {
  const [active, setActive] = useState<Section>(null);
  const [showLanding, setShowLanding] = useState(true);

  return (
    <div>
      <div className="relative min-h-screen w-full flex items-center justify-center">
        
       

        <header className='bg-black absolute top-0 left-0 z-50 flex items-center justify-between border-b-[1.5px] border-white rounded-b-[40px] w-full h-[85px] px-8'>
          <Header
            active={active}
            setActive={(id) => {
              setActive(id);
              setShowLanding(false);
            }}
            onLogoClick={() => {
              setShowLanding(true);
              setActive(null);
            }}
            showLanding={showLanding}
          />
        </header>

        {showLanding
          ? <Landing />
          : <Mainpage active={active} />
        }
        
      </div>
    </div>
  )
}

export default App