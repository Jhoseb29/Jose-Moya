import { useState } from "react";
import { FaBars, FaTemperatureLow, FaTimes } from "react-icons/fa";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { Link } from "react-scroll";
import {useTheme} from "../context/ThemeProvider";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { mode, setMode } = useState(true);
  const { theme, toggleTheme } = useTheme();



  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center relative w-full h-20 px-4 " style={{ backgroundColor: theme.background, color: theme.textColor }}>
      <div onClick={() => toggleTheme(!setMode)} className="fixed right-4 top-8 cursor-pointer pr-4 z-10  hover:scale-105 duration-200">
           <BsMoonStarsFill />
        </div>


      <ul className="hidden md:flex absolute left-2/4">
        
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 duration-200"
          >
            
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div>
            
            <Link
              to="home"
              smooth
              duration={500}
              className="group text-white w-fit px-2 py-2 my-2  flex justify-center items-center  flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer fixed bottom-12 right-5"
            >
              
              <span className="group-hover:rotate-45 duration-300">
                <MdOutlineKeyboardArrowUp size={25} className="flex justify-center items-center" />
              </span>
            </Link>
          </div>

      <div className="">
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 fixed  md:hidden hover:scale-105 duration-200 absolute left-12"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center  absolute top-0 left-0 w-full h-screen" style={{ backgroundColor: theme.background, color: theme.textColor }}>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default NavBar;
