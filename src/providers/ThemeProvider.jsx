import { createContext, useMemo, useState } from 'react';

export const ThemeContext = createContext({ isDark: false })

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]) //используется для отмены рендеринга при изменения темы

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
