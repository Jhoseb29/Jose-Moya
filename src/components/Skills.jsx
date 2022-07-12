import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import nodejs from "../assets/node-js.png";
import sequelize from "../assets/sequelize.png";
import python from "../assets/python.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github1.png";
import tailwind from "../assets/tailwind.png";
import {useTheme} from "../context/ThemeProvider";


const Skills = () => {
  const { theme, toggleTheme } = useTheme();

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: sequelize,
      title: "Sequelize",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: python,
      title: "Python",
      style: "shadow-yellow-300",
    }
  ];

  return (
    <div
      name="skills"
      className="w-full  pt-56"
      style={{ backgroundColor: theme.azul, color: theme.hehe }}
    >
      <div className="max-w-screen-lg mx-auto p-4  flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-100 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
