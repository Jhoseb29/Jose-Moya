import React, { createContext, useState, useContext } from 'react';

const themeStyles = {
  dark: {
    background: '#282c34',
    textColor: 'white',
    azul: '#333',
    hehe: 'white'
  },
  light: {
    background: 'white',
    textColor: '#282c34',
    azul: '#D4E6F1',
    hehe: '#282c34',
    color: '#3498DB'
  }

}

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark');
  const value = { theme: themeStyles[theme], toggleTheme, themeName: theme };
  return <ThemeContext.Provider value={value} {...props} />;
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider as default, useTheme };