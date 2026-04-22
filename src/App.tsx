import { useState } from 'react'
import './App.css'
import { Mainpage } from './Screen/MainPage';
import { Header } from './Screen/HeaderContent';
import TopoBg from './assets/topgif.mp4';

type Section = "about" | "projects" | "techstack" | "experience";

function App() {
  const [active, setActive] = useState<Section>("projects");

  return (
    <div>
      <div className="relative min-h-screen w-full flex items-center justify-center">
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={TopoBg} type="video/mp4" />
        </video>

        <header className='bg-black absolute top-0 left-0 z-50 flex items-center justify-between border-b-[1.5px] border-white rounded-b-[40px] w-full h-[100px] px-8'>
          <Header active={active} setActive={setActive} />
        </header>

        <Mainpage active={active} />
      </div>
    </div>
  )
}

export default App