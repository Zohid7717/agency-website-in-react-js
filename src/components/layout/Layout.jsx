import React, { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import cn from 'classnames'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  const {theme}=useContext(ThemeContext)
  return (
    <div className={cn('layout', {dark: theme === 'dark'})}>
      {children}
    </div>
  );
}

export default Layout;
