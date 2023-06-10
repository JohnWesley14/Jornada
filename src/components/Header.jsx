import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // You can also use <link> for styles
export default function Header() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="w-full flex justify-between py-10 pl-10 h-5 md:w-[90%]"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-duration="1000"
    >
      <div>
        <a href="#hero" className="text-white">
          Jornada Informática
        </a>
      </div>
      <div className="flex justify-evenly w-[50%]">
        <a href="#projetos" className="text-white">
          Projetos
        </a>
        <a href="/" className="text-white">
          Informações
        </a>
        <a href="#programacao" className="text-white">
          Programação
        </a>
      </div>
    </div>
  );
}
