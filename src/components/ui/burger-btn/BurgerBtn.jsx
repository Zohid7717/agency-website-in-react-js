import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import styles from './BurgerBtn.module.scss'

const BurgerBtn = () => {
  const burgerFunc = () => {
    document.getElementById('burger').style.display = 'none'
    document.getElementById('menu').style.left = '0'
  }
  return (
    <div className={styles.burger} id='burger' onClick={burgerFunc}>
      <GiHamburgerMenu />
    </div>
  );
}

export default BurgerBtn;
