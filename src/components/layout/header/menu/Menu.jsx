import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss'
import Logo from '../logo/Logo';
import { VscChromeClose } from 'react-icons/vsc'

const Menu = () => {
  const closeFunc = () => {
    document.getElementById('burger').style.display = 'flex'
    document.getElementById('menu').style.left = '-100%'
  }
  return (
    <div className={styles.menu} id='menu'>
      <div className={styles.menu__burger_control}>
        <Logo />
        <div className={styles.menu__burger_close} onClick={closeFunc}>
          <VscChromeClose/>
        </div>
      </div>
      <ul className={styles.menu__items}>
        <li><a href='#about'>Biz haqimizda</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#services'>Xizmatlar</a></li>
        <li><a href='#contacts'>Aloqa uchun</a></li>
      </ul>
    </div>
  );
}

export default Menu;
