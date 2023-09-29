import  { useEffect, useState } from 'react';
import './App.css';
import Individual from './Layout/Individual';
import LandingPage from './Layout/LandingPage';
import { Aboutlese } from './Layout/Aboutlese';

import Footer from './Layout/Footer';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const handleTextHover = () => {
    setIsHoveringText(true);
  };

  const handleTextLeave = () => {
    setIsHoveringText(false);
  };

  return (
    <>
      <div className={`cursor-container ${isHoveringText ? 'magnify' : ''}`}>
        <div className="cursor" style={{ left: position.x, top: position.y }}></div>
      </div>
      <div onMouseEnter={handleTextHover} onMouseLeave={handleTextLeave}>
       <div className="main h-screen w-auto bg-cover bg-no-repeat bg-[url('/img/lesegif.gif')]">
     
    </div>
        <LandingPage />
          <Aboutlese/>
        <Individual />
        <Footer/>
      </div>
    </>
  );
}

export default App;
