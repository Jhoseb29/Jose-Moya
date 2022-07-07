import React from "react";
import CRUD from "../assets/portfolio/crud.png";
import eccomerce from "../assets/portfolio/eccomerce_react.png";
import rickandmorty from "../assets/portfolio/rickandmorty.png";
import apiClima from "../assets/portfolio/apiclima.png";
import proverbios from "../assets/portfolio/proverbios.png";
import instaclon from "../assets/portfolio/instaclon.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: CRUD,
      title: "CRUD",
      demo: "https://crudjosemoya.netlify.app/",
      code: "https://github.com/Jhoseb29/CRUD.git",
    },
    {
      id: 2,
      src: eccomerce,
      title: "Eccomerce",
      demo: "https://eccomerce-react-jose-moya.netlify.app/login",
      code: "https://github.com/Jhoseb29/TiendaJoyeria.git",
    },
    {
      id: 3,
      src: rickandmorty,
      title: "Rick and Morty",
      demo: "https://rickimartin.netlify.app/",
      code: "https://github.com/Jhoseb29/RickyMartin.git",
    },
    {
      id: 4,
      src: apiClima,
      title: "Api Clima",
      demo: "https://apiclimajosemoya.netlify.app/",
      code: "https://github.com/Jhoseb29/apiclima.git",
    },
    {
      id: 5,
      src: proverbios,
      title: "Proverbios",
      demo: "https://proverbioscelebres.netlify.app/",
      code: "https://github.com/Jhoseb29/QuoteMachine.git",
    },
    {
      id: 6,
      src: instaclon,
      title: "Instaclon",
      demo: "https://instasociety.netlify.app/",
      code: "https://github.com/Jhoseb29/Clon-inst.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Proyects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <h1  className="flex items-center justify-center text-lg text-purple-400  duration-200 hover:scale-150 cursor-default"> {title} </h1>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor: pointer"
                >
                  Demo
                </a>
                <a
                  href={code}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor: pointer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
