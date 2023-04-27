import React from 'react';
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className={styles.logo__wrapper}>
      <a href='/'><p className={styles.logo}>LOGO</p></a>
    </div>
  );
}

export default Logo;
