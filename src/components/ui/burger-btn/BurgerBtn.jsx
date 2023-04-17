import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import styles from './BurgerBtn.module.scss'

const BurgerBtn = () => {
  return (
    <div className={styles.burger}>
      <GiHamburgerMenu/>
    </div>
  );
}

export default BurgerBtn;
