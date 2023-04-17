import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss'
import Logo from '../logo/Logo';
import { VscChromeClose } from 'react-icons/vsc'

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__burger_control}>
        <Logo />
        <div className={styles.menu__burger_close}>
          <VscChromeClose/>
        </div>
      </div>
      <ul className={styles.menu__items}>
        <li><a href='/'>Bosh sahifa</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#services'>Xizmatlar</a></li>
        <li><a href='#contacts'>Aloqa uchun</a></li>
      </ul>
    </div>
  );
}

export default Menu;
