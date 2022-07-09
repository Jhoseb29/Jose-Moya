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


function App() {
  

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    } , 2000);
  },[])

  return (
    
      
    <ThemeProvider>
    <div>
      {isLoading ? (<Loader />) : (
      <div>
        <NavBar />
        
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <SocialLinks />
       
      </div>
      )}
      
    </div>
    </ThemeProvider>
    
    
  );
}

export default App;
