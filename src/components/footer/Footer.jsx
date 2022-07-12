import React from "react";
import { useTheme } from "../../context/ThemeProvider";
import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const { theme } = useTheme();

  return (
    <div
      name="footer"
      style={{ backgroundColor: theme.background, color: theme.textColor }}
    >
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social_icon">
          <li>
            <p href="https://github.com/Jhoseb29">
              
              <FaGithub />
            </p>
          </li>
          <li>
            <p href="https://www.linkedin.com/in/jhoseb29/">
              
              <FaLinkedin />
            </p>
          </li>
        </ul>
        <p>@2022 Jose Moya | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
