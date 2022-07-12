import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { useState } from "react";
import Loader from "./components/loader/loader";
import { useEffect } from "react";
import ThemeProvider from "./context/ThemeProvider";
import Footer from "./components/footer/Footer"
import AnimCursor from "./components/animatedCursor/AnimCursor";

function App() {
  

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    } , 4000);
  },[])

  return (
    
    <>
    
    <ThemeProvider>
    <div>
      <AnimCursor />
      {isLoading ? (<Loader />) : (
      <div>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
      )}
      
    </div>
    </ThemeProvider>
    </>
    
  );
}

export default App;
