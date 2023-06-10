import React, { useEffect } from "react";
import CardsProject from "./CardsProject";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
export default function ProjectArea() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="pl-10 h-[100%]"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-duration="1000"
        id="projetos"
      >
        <h1 className="text-slate-300 text-4xl">Projetos</h1>
        <div className="w-64 h-[1px] bg-gradient-to-r from-cyan-300 to-purple-700" />
      </div>
      <div
        className="flex px-10 justify-between items-center mt-10 min-h-[400px]"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <div className="w-full flex-col ">
          <div className="flex justify-between max-sm:flex-col ">
            <CardsProject />
            <CardsProject />
            <CardsProject />
          </div>
          <div className="flex justify-between mt-10 max-sm:flex-col  ">
            <CardsProject />
            <CardsProject />
            <CardsProject />
          </div>
        </div>
      </div>
    </>
  );
}
