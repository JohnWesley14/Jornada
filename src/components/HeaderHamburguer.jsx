import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderHamburguer = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };
  
  
  
  return (
   
    <header className="bg-[#131313] text-white px-5">
      
      <div className="container mx-auto flex justify-between  py-4">
        <div className="text-2xl font-bold">Logo</div>
        <nav
          className={`md:flex ${
            menuAberto ? "block" : "hidden"
          } md:items-center md:space-x-4 h-[100vh] items-center flex`}
        >
          <div className="md:flex md:space-x-4 w-full"></div>
          <div className="flex justify-between flex-col w-[100%] gap-5 pb-5">
            <a href="#projetos" className="text-white text-5xl">
              Projetos
            </a>
            <a href="/" className="text-white text-5xl">
              Informações
            </a>
            <a href="#programacao"className="text-white text-5xl">
              Programação
            </a>
          </div>
        </nav>
        <div className="ease-in">
          {menuAberto ? (
            <FaTimes
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderHamburguer;
