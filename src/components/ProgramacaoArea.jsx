import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
export default function ProgramacaoArea() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="mt-10 pl-10" id="programacao">
        <h1 className="text-slate-400 text-4xl">Programação</h1>
        <div className="w-64 h-[1px] bg-gradient-to-r from-cyan-300 to-purple-700" />
      </div>
      <div
        
      >
        
      </div>
    </>
  );
}
