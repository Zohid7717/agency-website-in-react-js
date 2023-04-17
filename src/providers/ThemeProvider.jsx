import { createContext, useState } from 'react';
const ThemeContext = createContext({ type: 'Light' })

export const ThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = useState('Light')

  return
  <ThemeContext.Provider value={{ themeType, setThemeType }}>
    {children}
  </ThemeContext.Provider>
}
