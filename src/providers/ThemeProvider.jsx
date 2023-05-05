import React, {createContext ,useContext, useState } from 'react';
import { changeCSSVariables } from '../services/changeCSSVariables';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(null);
  const [projectDB, setProjectDB] = useState([]);
  const [changeCategory, setChangeCategory] = useState('');
  
  const change = name => {
    setTheme(name);
    changeCSSVariables(name);
  }
  return (
    <ThemeContext.Provider value={{
      theme,
      change,
      projectDB,
      setProjectDB,
      changeCategory,
      setChangeCategory
    }} {...props}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);