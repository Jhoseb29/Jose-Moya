import React from "react";
import {useTheme} from "../context/ThemeProvider";

const About = () => {
  
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      name="about"
      className="w-full md:h-screen" style={{ backgroundColor: theme.azul, color: theme.hehe }}>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-15">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          deserunt illum mollitia officiis qui exercitationem perferendis neque
          quasi a recusandae necessitatibus tempora iusto! Blanditiis error
          iste, totam fugiat recusandae rerum laborum perferendis molestiae
          aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
          ab mollitia voluptatibus, a nostrum eveniet laborum!
        </p>


        
      </div>
    </div>
  );
};

export default About;
