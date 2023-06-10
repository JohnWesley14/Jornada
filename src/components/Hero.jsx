import React, { useEffect } from "react";
import imagemJoystick from "../assets/joystick.png";
import imagemJoystickMelhor from "../assets/joystickmelhor.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full flex items-center h-[80vh] max-md:flex-col" id="hero">
      <div
        className="max-h-[50%] w-[50%] pl-10 flex mt-10 flex-col gap-6 max-w-[80%] max-md:w-full max-md:mt-48 max-md:pl-0"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-duration="1000"
      >
        <h1 className="text-6xl font-bold text-gray-300 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-purple-800 min-h-[100px] pb-3 flex-wrap">
          Conheça mais sobre a jornada!
        </h1>
        <p className="text-gray-300 font-normal text-xl">
          Conheça mais sobre tecnologia, acompanhe nossos projetos e venha
          conosco
        </p>
        <button className="py-3 px-4 rounded-3xl bg-gradient-to-r from-cyan-200 to-purple-400 w-64 max-md:w-full text-black">
          Ver programação do evento
        </button>
      </div>
      <div
        className="w-[50%] flex pl-20 relative h-[40%]"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-duration="1000"
      >
        <img
          src={imagemJoystickMelhor}
          alt="Imagem joystick"
          className="w-[350px] h-[350px] absolute right-8"
        />
        <div className="w-80 h-80 rounded-full blur-lg opacity-5 bg-purple-800 absolute right-12"></div>
      </div>
    </div>
  );
}
