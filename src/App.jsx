import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectArea from "./components/ProjectArea";
import ProgramacaoArea from "./components/ProgramacaoArea";
import HeaderHamburguer from "./components/HeaderHamburguer";

function App() {
  const [count, setCount] = useState(0);
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setLarguraTela(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="max-h-[100%]" >
      {larguraTela < 768 ? 
          <HeaderHamburguer /> : <Header />
      }
       
        <Hero />
      </div>
      <div className="max-h-[100%]" >
        <ProjectArea />
        <ProgramacaoArea />
      </div>
    </>
    
  );
}

export default App;
