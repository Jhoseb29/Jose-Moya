import React from "react";
import { useTheme } from "../context/ThemeProvider";

const About = () => {
  const { theme } = useTheme();

  return (
    <div
      name="about"
      className="w-full md:h-screen pb-80"
      style={{ backgroundColor: theme.azul, color: theme.hehe }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-15">
          My name is Jose Moya, I am 20 years old, I graduated as a full-stack
          web developer from academlo. From a very young age I have been
          interested in new technologies and their essential structure, both
          hardware and software, as well as the functionality of programs and
          applications for computers and mobile devices. I consider myself a
          person with great leadership, team management, great emotional
          intelligence, empathy. I relate very well with others, I have good
          communication and above all dedication to what I like to do.
        </p>
      </div>
    </div>
  );
};

export default About;
