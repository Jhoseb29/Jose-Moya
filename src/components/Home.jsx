import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import 'animate.css'
import IMG from "../assets/profile.jpeg";
import {useTheme} from "../context/ThemeProvider";
const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState();
  const [index, setIndex] = useState();
  const toRotate = [ "Web Developer", "Front-end Developer", "Back-end Developer" ];
  const period = 1000;
  const { theme } = useTheme();

  

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 3);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, index])
  return (
    <div
      name="home"
      className="h-screen w-full"
      style={{ backgroundColor: theme.background, color: theme.textColor }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
           <div>
                <h1 className= "text-4xl sm:text-7xl font-bold ">{`Hi! I'm 
                Jose Moya`} <span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer"]'><span className="wrap">{text}</span></span></h1>
              </div>
          <div>
            
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <p className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </p>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={IMG}
            alt="my profile"
            className="rounded-md  pb-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
