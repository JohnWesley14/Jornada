import React, { useEffect } from "react";
import imageTest from "../assets/imageTest.jpg";

export default function CardsProject() {
  return (
    <div className="w-64">
      <img
        src={imageTest}
        alt="Imagem de Teste"
        className="w-64 h-40 rounded-lg max-md:w-40 "
      />
      <h1 className="text-gray-200 font-semibold text-2xl mt-3">Lorem Ipsum</h1>
      <p className="text-gray-200 font-light text-xs mt-3 italic leading-relaxed whitespace-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  );
}
