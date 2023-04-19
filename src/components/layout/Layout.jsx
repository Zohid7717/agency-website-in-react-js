import React, { useContext } from 'react';
import styles from './Layout.module.scss'
import { ThemeContext } from '../../providers/ThemeProvider';
import cn from 'classnames'

const Layout = ({ children }) => {
  const {isDark}=useContext(ThemeContext)
  return (
    <div className={cn('layout', {dark: isDark})}>
      {children}
    </div>
  );
}

export default Layout;
