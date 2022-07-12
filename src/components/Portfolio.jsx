import React from "react";
import CRUD from "../assets/portfolio/Crud.png";
import eccomerce from "../assets/portfolio/Eccomerce.png";
import rickandmorty from "../assets/portfolio/InstaClon.png";
import apiClima from "../assets/portfolio/PharseMachine.png";
import proverbios from "../assets/portfolio/RickAndMortyApp.png";
import instaclon from "../assets/portfolio/WeatherApp.png";
import { useTheme } from "../context/ThemeProvider";
import './styles/portfolio.css';
const Portfolio = () => {
  const { theme, toggleTheme } = useTheme();

  const portfolios = [
    {
      id: 1,
      src: CRUD,

      demo: "https://crudjosemoya.netlify.app/",
      code: "https://github.com/Jhoseb29/CRUD.git",
    },
    {
      id: 2,
      src: eccomerce,

      demo: "https://eccomerce-react-jose-moya.netlify.app/login",
      code: "https://github.com/Jhoseb29/TiendaJoyeria.git",
    },
    {
      id: 3,
      src: rickandmorty,

      demo: "https://rickimartin.netlify.app/",
      code: "https://github.com/Jhoseb29/RickyMartin.git",
    },
    {
      id: 4,
      src: apiClima,

      demo: "https://apiclimajosemoya.netlify.app/",
      code: "https://github.com/Jhoseb29/apiclima.git",
    },
    {
      id: 5,
      src: proverbios,

      demo: "https://proverbioscelebres.netlify.app/",
      code: "https://github.com/Jhoseb29/QuoteMachine.git",
    },
    {
      id: 6,
      src: instaclon,

      demo: "https://instasociety.netlify.app/",
      code: "https://github.com/Jhoseb29/Clon-inst.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b w-full portfolio pb-96 md:h-screen"
      style={{ backgroundColor: theme.azul, color: theme.hehe }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className=" grid sm:grid-cols-2 p-7 md:grid-cols-3 gap-8 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="card shadow-md shadow-gray-600 rounded-lg  ">
              <img
                src={src}
                alt=""
                className="img rounded-md duration-200 hover:scale-105  "
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  className="w-1/2 px-9 py-3 m-4  cursor: pointer btn"
                  target="_blank"
                >
                  
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>Demo
                  
                </a>
                <a
                  href={code}
                  className="w-1/2 px-9 py-3 m-4  cursor: pointer btn"
                  target="_blank"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>Code
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
