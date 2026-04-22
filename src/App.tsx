import './App.css'
import { BriefInfoScreen } from './Screen/BriefInfoScreen'
import { Mainpage } from './Screen/MainPage';
import TopoBg from './assets/topgif.mp4';

function App() {
  return (
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

  <Mainpage/>
  
    </div>
    
  )
}

export default App
